import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, PinIcon, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="bg-[#2C2420] text-[#FAF8F5] pt-16 pb-12 border-t border-[#4A3E39]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#4A3E39]/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-normal tracking-wider text-[#FAF8F5]">
                CRUMB &amp; CO.
              </span>
            </Link>
            <p className="text-[#C48E80] font-serif italic text-lg">
              "{BUSINESS_INFO.tagline}"
            </p>
            <p className="text-sm text-[#EBE1D7]/75 max-w-sm leading-relaxed font-light">
              Crafting slow-fermented breads, delicate laminated morning pastries, and memorable bespoke celebration cakes for everyday and once-in-a-lifetime moments.
            </p>
            
            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#4A3E39] hover:bg-[#B85D43] text-[#FAF8F5] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#4A3E39] hover:bg-[#B85D43] text-[#FAF8F5] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-[#4A3E39] hover:bg-[#B85D43] text-[#FAF8F5] flex items-center justify-center transition-colors"
              >
                <PinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3.5">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EBE1D7]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Bakehouse Menu
                </Link>
              </li>
              <li>
                <Link to="/cakes" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Celebration Cakes
                </Link>
              </li>
              <li>
                <Link to="/custom-orders" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Bakery Gallery
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Customer Words
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3.5">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EBE1D7]">
              Offerings
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/menu?category=cakes" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Celebration Cakes
                </Link>
              </li>
              <li>
                <Link to="/menu?category=pastries" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Viennoiserie &amp; Pastries
                </Link>
              </li>
              <li>
                <Link to="/menu?category=breads" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Artisan Sourdough &amp; Breads
                </Link>
              </li>
              <li>
                <Link to="/menu?category=cookies" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Fresh Batch Cookies
                </Link>
              </li>
              <li>
                <Link to="/menu?category=desserts" className="text-[#EBE1D7]/80 hover:text-[#FAF8F5] transition-colors">
                  Cheesecakes &amp; Tarts
                </Link>
              </li>
              <li>
                <Link to="/custom-orders" className="text-[#C48E80] hover:text-[#FAF8F5] font-medium transition-colors">
                  Wedding &amp; Event Orders →
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit & Hours */}
          <div className="space-y-3.5 text-sm">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EBE1D7]">
              Bakehouse
            </h3>
            <div className="space-y-3 text-[#EBE1D7]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B85D43] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.street},<br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B85D43] shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B85D43] shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#B85D43] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <p className="font-medium text-[#FAF8F5]">Mon – Sat: {BUSINESS_INFO.openingHours.monSat}</p>
                  <p>Sun: {BUSINESS_INFO.openingHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Demo Disclosure */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EBE1D7]/60">
          <p>© {new Date().getFullYear()} Crumb &amp; Co. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-center sm:text-right">
            <span>Fictional Bakery Portfolio Website</span>
            <span className="opacity-40">•</span>
            <span className="text-[#EBE1D7]/80">Created for Bakery Client Showcase</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
