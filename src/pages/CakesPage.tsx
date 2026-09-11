import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { usePageSeo } from '../hooks/usePageSeo';
import { SectionHeading } from '../components/SectionHeading';
import { CakeCard } from '../components/CakeCard';
import { CategoryFilter, FilterOption } from '../components/CategoryFilter';
import { QuickEnquiryModal } from '../components/QuickEnquiryModal';
import { CAKES } from '../data/cakes';
import { CakeItem, CakeCategory } from '../types';

export const CakesPage: React.FC = () => {
  usePageSeo({
    title: 'Celebration Cakes & Custom Cakes | Crumb & Co.',
    description:
      'Explore our curated collection of signature celebration cakes, minimalist buttercream tiers, rich chocolate cakes, and bespoke wedding centerpieces.',
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCakeForEnquiry, setSelectedCakeForEnquiry] = useState<CakeItem | null>(null);

  const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Cake Styles', count: CAKES.length },
    { id: 'signature', label: 'Signature Cakes', count: CAKES.filter(c => c.category === 'signature').length },
    { id: 'celebration', label: 'Celebration Cakes', count: CAKES.filter(c => c.category === 'celebration').length },
    { id: 'minimal', label: 'Minimal Cakes', count: CAKES.filter(c => c.category === 'minimal').length },
    { id: 'chocolate', label: 'Chocolate Cakes', count: CAKES.filter(c => c.category === 'chocolate').length },
    { id: 'custom', label: 'Custom Cakes', count: CAKES.filter(c => c.category === 'custom').length },
  ];

  const filteredCakes = useMemo(() => {
    if (activeCategory === 'all') return CAKES;
    return CAKES.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <div id="cakes-page" className="w-full">
      {/* Editorial Header */}
      <section className="relative py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EBE1D7] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFEB] border border-[#EBE1D7] text-xs uppercase tracking-[0.2em] font-medium text-[#B85D43] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Cake Studio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4rem] font-normal text-[#2C2420] tracking-tight leading-[1.14]">
            Celebration Cakes, <br />
            <span className="italic text-[#B85D43]">Crafted With Intention.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#7E716A] max-w-2xl mx-auto leading-relaxed font-normal">
            Whether understated spatula textures, delicate botanical accents, or rich single-origin chocolate ganache, our cakes are designed to be both visually serene and deeply delicious.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/custom-orders"
              className="px-7 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#B85D43] text-white hover:bg-[#98452E] shadow-sm hover:shadow transition-all flex items-center gap-2"
            >
              <span>Commission Custom Cake</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-[69px] z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EBE1D7] py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <CategoryFilter
            options={filterOptions}
            selectedId={activeCategory}
            onChange={setActiveCategory}
          />
          <span className="text-xs text-[#7E716A] font-medium hidden md:inline">
            {filteredCakes.length} Cakes
          </span>
        </div>
      </div>

      {/* Cakes Showcase Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredCakes.map((cake) => (
              <CakeCard
                key={cake.id}
                cake={cake}
                onEnquire={(item) => setSelectedCakeForEnquiry(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cake Sizing & Ordering Guide */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#EBE1D7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ordering Guide"
            title="Finding the Right Size"
            subtitle="A quick guide to portioning for birthdays, intimate dinners, and large receptions."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white border border-[#EBE1D7] overflow-hidden shadow-xs group">
              <div className="aspect-4/3 overflow-hidden bg-[#FAF8F5]">
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80"
                  alt="0.5 kg 6-inch petite celebration cake"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B85D43]">0.5 kg (6-inch)</span>
                <h4 className="font-serif text-xl font-medium text-[#2C2420] mt-1 mb-2">4 – 6 Portions</h4>
                <p className="text-xs text-[#7E716A] leading-relaxed">
                  Perfect for intimate couple dinners, quiet birthday moments, and small family gatherings.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#EBE1D7] overflow-hidden shadow-xs group">
              <div className="aspect-4/3 overflow-hidden bg-[#FAF8F5]">
                <img
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80"
                  alt="1.0 kg 7-inch classic celebration cake"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B85D43]">1.0 kg (7-inch)</span>
                <h4 className="font-serif text-xl font-medium text-[#2C2420] mt-1 mb-2">8 – 10 Portions</h4>
                <p className="text-xs text-[#7E716A] leading-relaxed">
                  Our most popular size for birthday parties, dinner celebrations, and anniversary dinners.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#EBE1D7] overflow-hidden shadow-xs group">
              <div className="aspect-4/3 overflow-hidden bg-[#FAF8F5]">
                <img
                  src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&auto=format&fit=crop&q=80"
                  alt="1.5 kg 8-inch grand party cake"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B85D43]">1.5 kg (8-inch)</span>
                <h4 className="font-serif text-xl font-medium text-[#2C2420] mt-1 mb-2">12 – 16 Portions</h4>
                <p className="text-xs text-[#7E716A] leading-relaxed">
                  Generous slices for mid-sized family celebrations, office milestones, or baby showers.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#EBE1D7] overflow-hidden shadow-xs group">
              <div className="aspect-4/3 overflow-hidden bg-[#FAF8F5]">
                <img
                  src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&auto=format&fit=crop&q=80"
                  alt="2.0 kg+ multi-tiered architectural celebration cake"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B85D43]">2.0 kg+ / Multi-Tier</span>
                <h4 className="font-serif text-xl font-medium text-[#2C2420] mt-1 mb-2">20 – 50+ Portions</h4>
                <p className="text-xs text-[#7E716A] leading-relaxed">
                  Stacked two-tier and three-tier statements designed for weddings and grand receptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Custom Cake Callout */}
      <section className="py-16 bg-[#F5EFEB] border-t border-[#EBE1D7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B85D43]">
            Have a Specific Concept in Mind?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal">
            Bring Us Your Mood Board
          </h2>
          <p className="text-base text-[#7E716A] max-w-xl mx-auto leading-relaxed">
            We happily adapt palette colors, botanical arrangements, piped typography, and personalized toppers for your celebration.
          </p>
          <div className="pt-2">
            <Link
              to="/custom-orders"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#B85D43] text-white hover:bg-[#98452E] shadow-sm transition-all"
            >
              <span>Submit Custom Cake Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={!!selectedCakeForEnquiry}
        onClose={() => setSelectedCakeForEnquiry(null)}
        targetItem={selectedCakeForEnquiry}
      />
    </div>
  );
};
