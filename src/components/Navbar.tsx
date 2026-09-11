import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { BUSINESS_INFO } from '../data/business';

interface NavbarProps {
  onOpenQuickEnquiry?: (prefilledItem?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuickEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(30);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Cakes', path: '/cakes' },
    { name: 'Custom Orders', path: '/custom-orders' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Portfolio Showcase Top Bar */}
      <div 
        id="portfolio-banner"
        className="bg-[#2C2420] text-[#FAF8F5] text-xs py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2 font-light border-b border-[#4A3E39]"
      >
        <span className="inline-flex items-center gap-1 text-[#EBE1D7]">
          <Sparkles className="w-3 h-3 text-[#B85D43]" />
          <span className="font-medium text-[#FAF8F5]">Crumb & Co.</span>
          <span className="hidden sm:inline opacity-75">— Fictional Portfolio & Demo Website</span>
        </span>
        <span className="hidden md:inline text-xs text-[#EBE1D7]/60">|</span>
        <span className="hidden md:inline text-xs text-[#EBE1D7]/80">Available for bakery client adaptations</span>
      </div>

      <header
        id="site-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EBE1D7]/80 py-3'
            : 'bg-[#FAF8F5]/80 backdrop-blur-xs py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              id="nav-logo"
              className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B85D43] rounded"
            >
              <span className="font-serif text-2xl sm:text-[1.7rem] font-medium tracking-wider text-[#2C2420] leading-none group-hover:text-[#B85D43] transition-colors">
                CRUMB &amp; CO.
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#7E716A] mt-1 font-medium">
                Artisanal Bakery
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-[13.5px] font-medium tracking-wide rounded-full transition-colors relative ${
                      isActive
                        ? 'text-[#B85D43] font-semibold'
                        : 'text-[#4A3E39] hover:text-[#2C2420] hover:bg-[#F5EFEB]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#B85D43] rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/custom-orders"
                id="header-cta-button"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#B85D43] text-white hover:bg-[#98452E] shadow-sm hover:shadow active:scale-[0.98] transition-all"
              >
                <span>Order / Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/custom-orders"
                className="sm:hidden inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full bg-[#B85D43] text-white"
              >
                Enquire
              </Link>
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-[#2C2420] hover:bg-[#F5EFEB] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF8F5] pt-4 px-6 pb-8 overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#EBE1D7]">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col"
            >
              <span className="font-serif text-2xl font-medium tracking-wider text-[#2C2420]">
                CRUMB &amp; CO.
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#7E716A]">
                {BUSINESS_INFO.tagline}
              </span>
            </Link>
            <button
              type="button"
              id="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-[#2C2420] hover:bg-[#EBE1D7]/50"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col py-6 space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-lg font-serif rounded-xl flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#F5EFEB] text-[#B85D43] font-medium'
                      : 'text-[#2C2420] hover:bg-[#FAF8F5]'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#7E716A]">→</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-[#EBE1D7] flex flex-col gap-3">
            <Link
              to="/custom-orders"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-4 text-center text-sm uppercase tracking-wider font-semibold rounded-full bg-[#B85D43] text-white shadow-sm flex items-center justify-center gap-2"
            >
              <span>Custom Cake Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="text-xs text-[#7E716A] text-center pt-2">
              <p>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}</p>
              <p className="mt-1">{BUSINESS_INFO.phone}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
