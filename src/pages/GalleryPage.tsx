import React, { useState, useMemo } from 'react';
import { Sparkles, Camera } from 'lucide-react';
import { usePageSeo } from '../hooks/usePageSeo';
import { SectionHeading } from '../components/SectionHeading';
import { GalleryGrid } from '../components/GalleryGrid';
import { CategoryFilter, FilterOption } from '../components/CategoryFilter';
import { CTASection } from '../components/CTASection';
import { GALLERY_ITEMS } from '../data/gallery';

export const GalleryPage: React.FC = () => {
  usePageSeo({
    title: 'Crumb & Co. Bakery Gallery',
    description:
      'Browse photographs of our freshly baked sourdough, viennoiserie, bespoke wedding cakes, and behind-the-scenes moments at Crumb & Co.',
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Photos', count: GALLERY_ITEMS.length },
    { id: 'cakes', label: 'Cakes', count: GALLERY_ITEMS.filter((i) => i.category === 'cakes').length },
    { id: 'pastries', label: 'Pastries', count: GALLERY_ITEMS.filter((i) => i.category === 'pastries').length },
    { id: 'bread', label: 'Bread', count: GALLERY_ITEMS.filter((i) => i.category === 'bread').length },
    { id: 'desserts', label: 'Desserts', count: GALLERY_ITEMS.filter((i) => i.category === 'desserts').length },
    { id: 'behind-the-scenes', label: 'Behind the Scenes', count: GALLERY_ITEMS.filter((i) => i.category === 'behind-the-scenes').length },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  return (
    <div id="gallery-page" className="w-full">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EBE1D7] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFEB] border border-[#EBE1D7] text-xs uppercase tracking-[0.2em] font-medium text-[#B85D43] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Kitchen Photography</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#2C2420] tracking-tight leading-tight">
            Fresh From Our Kitchen
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#7E716A] max-w-xl mx-auto leading-relaxed font-normal">
            Moments captured between early morning ovens, delicate hand piping, and golden crusts. Click any image to open the high-resolution lightbox.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-[69px] z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EBE1D7] py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <CategoryFilter
            options={filterOptions}
            selectedId={activeCategory}
            onChange={setActiveCategory}
          />
          <span className="text-xs text-[#7E716A] font-medium hidden md:inline">
            {filteredItems.length} Photographs
          </span>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={filteredItems} />
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection
        heading="Inspired by What You See?"
        supportingText="Let's create something equally memorable for your upcoming celebration."
        primaryButtonText="Plan Your Custom Cake"
        primaryButtonLink="/custom-orders"
        secondaryButtonText="Explore Daily Menu"
        secondaryButtonLink="/menu"
        variant="warm"
      />
    </div>
  );
};
