import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ChevronDown, 
  Sparkles, 
  Heart, 
  Clock, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { usePageSeo } from '../hooks/usePageSeo';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { ReviewCard } from '../components/ReviewCard';
import { CTASection } from '../components/CTASection';
import { QuickEnquiryModal } from '../components/QuickEnquiryModal';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { REVIEWS } from '../data/reviews';
import { GALLERY_ITEMS } from '../data/gallery';
import { Product } from '../types';

export const HomePage: React.FC = () => {
  usePageSeo({
    title: 'Crumb & Co. | Artisan Bakery & Celebration Cakes',
    description:
      'Discover Crumb & Co., a modern bakery offering freshly baked cakes, pastries, breads, cookies and custom celebration cakes.',
  });

  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<Product | null>(null);

  // 6 Bestsellers as requested
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 6);

  // 4 Featured categories
  const featuredCategories = CATEGORIES.slice(0, 4);

  // 6 Gallery preview items
  const galleryPreview = GALLERY_ITEMS.slice(0, 6);

  // 3 Reviews preview
  const reviewsPreview = REVIEWS.slice(0, 3);

  return (
    <div id="home-page" className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
        {/* Background Image with warm overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1800&auto=format&fit=crop&q=85"
            alt="Artisan bakery table with fresh sourdough, pastries, and cakes"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Subtle Warm Editorial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2420]/85 via-[#2C2420]/60 to-[#2C2420]/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-[#FAF8F5]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#C48E80]" />
            <span>Artisanal Bakehouse &amp; Cake Studio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.25rem] font-normal tracking-tight leading-[1.12] text-white max-w-3xl mx-auto drop-shadow-xs">
            Little Moments. <br />
            <span className="italic text-[#EBE1D7]">Beautifully Baked.</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-lg sm:text-xl text-[#FAF8F5]/90 max-w-2xl mx-auto leading-relaxed font-light">
            From everyday treats to unforgettable celebrations, freshly baked with care.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              id="hero-explore-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#B85D43] text-white hover:bg-[#98452E] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <span>Explore Our Bakes</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              to="/custom-orders"
              id="hero-custom-enquiry-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase tracking-wider font-semibold bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <span>Custom Cake Enquiry</span>
            </Link>
          </div>

          {/* Highlights bar */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto text-xs text-[#EBE1D7]">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B85D43]" />
              <span>Baked Fresh Every Morning</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B85D43]" />
              <span>Small Batch Slow Ferment</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B85D43]" />
              <span>Custom Celebration Orders</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B85D43]" />
              <span>Coimbatore Local Pickup</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 inset-x-0 flex justify-center z-10 pointer-events-none text-white/70">
          <div className="flex flex-col items-center gap-1 animate-bounce">
            <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#B85D43] block">
                Welcome to Crumb &amp; Co.
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2C2420] tracking-tight leading-tight">
                Made for Sweet Moments
              </h2>
              <p className="text-lg sm:text-xl text-[#7E716A] leading-relaxed font-normal">
                At Crumb &amp; Co., every bake is made to turn ordinary moments into something worth remembering. From buttery morning viennoiserie to bespoke milestone tiers, our ovens are fired with love, patience, and unhurried craftsmanship.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#B85D43] hover:text-[#98452E] transition-colors border-b border-[#B85D43]/40 pb-1"
                >
                  <span>Our Baking Philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
                <div className="aspect-3/4 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#EBE1D7]">
                  <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80"
                    alt="Artisan sourdough loaf with blistered crust"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-3/4 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#EBE1D7] mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=80"
                    alt="Delicate mascarpone and fresh berry celebration cake"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating pill badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-8 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#EBE1D7] shadow-lg flex items-center gap-2 text-xs font-medium text-[#2C2420] whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 text-[#B85D43]" />
                  <span>Small-Batch • Baked Fresh Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED CATEGORIES SECTION */}
      <section className="py-16 bg-[#F5EFEB]/60 border-y border-[#EBE1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Curated Offerings"
            title="Fresh From the Oven"
            subtitle="Explore our handcrafted range of daily morning viennoiserie, artisan boules, and celebration cakes."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <div
                key={category.id}
                id={`category-card-${category.id}`}
                className="group bg-white rounded-2xl border border-[#EBE1D7] overflow-hidden flex flex-col hover:border-[#D9CBC2] hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#2C2420] mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-[#7E716A] leading-relaxed mb-6 font-normal">
                      {category.description}
                    </p>
                  </div>
                  <Link
                    to={`/menu?category=${category.id}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#2C2420] group-hover:text-[#B85D43] transition-colors"
                  >
                    <span>Explore {category.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BESTSELLERS SECTION (CUSTOMER FAVORITES) */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeading
              eyebrow="Signatures &amp; Staples"
              title="Customer Favorites"
              subtitle="The recipes our community returns for, morning after morning."
              align="left"
              className="md:mx-0"
            />
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B85D43] hover:text-[#98452E] shrink-0"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 Demo Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {bestsellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={(prod) => setSelectedProductForEnquiry(prod)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CUSTOM CAKE CTA SECTION */}
      <CTASection
        heading="Dream It. We'll Bake It."
        supportingText="Planning a birthday, wedding, anniversary or special celebration? Tell us what you're imagining and let's craft a bespoke centerpiece."
        primaryButtonText="Create Your Custom Cake"
        primaryButtonLink="/custom-orders"
        secondaryButtonText="Browse Cake Gallery"
        secondaryButtonLink="/cakes"
        variant="warm"
      />

      {/* 6. GALLERY PREVIEW SECTION */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#EBE1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeading
              eyebrow="Our Craft in Pictures"
              title="Fresh From Our Kitchen"
              subtitle="A peek into early morning bakes, slow fermentation, and hand-decorated tiers."
              align="left"
              className="md:mx-0"
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B85D43] hover:text-[#98452E] shrink-0"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryPreview.map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#F5EFEB] border border-[#EBE1D7] block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                  <span className="text-white text-[11px] font-medium leading-tight line-clamp-2 font-serif">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REVIEWS PREVIEW SECTION */}
      <section className="py-20 bg-[#F5EFEB]/50 border-t border-[#EBE1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Community Notes"
            title="Made With Love. Loved By Many."
            subtitle="Fictional demo testimonials illustrating our dedication to flavor and bespoke details."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reviewsPreview.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#2C2420] hover:text-[#B85D43] transition-colors"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <CTASection
        heading="Something Sweet Is Waiting."
        supportingText="Order your daily favorites or start planning your next celebration with our pastry team."
        primaryButtonText="Explore Menu"
        primaryButtonLink="/menu"
        secondaryButtonText="Custom Cake Enquiry"
        secondaryButtonLink="/custom-orders"
        variant="cream"
      />

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={!!selectedProductForEnquiry}
        onClose={() => setSelectedProductForEnquiry(null)}
        targetItem={selectedProductForEnquiry}
      />
    </div>
  );
};
