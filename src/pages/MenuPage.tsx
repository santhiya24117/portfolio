import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, X, Sparkles, Filter, ArrowUpRight } from 'lucide-react';
import { usePageSeo } from '../hooks/usePageSeo';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { CategoryFilter, FilterOption } from '../components/CategoryFilter';
import { QuickEnquiryModal } from '../components/QuickEnquiryModal';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { Product, ProductCategory } from '../types';

export const MenuPage: React.FC = () => {
  usePageSeo({
    title: 'Bakery Menu | Cakes, Pastries & Desserts | Crumb & Co.',
    description:
      'Explore our full bakery catalog featuring artisan sourdough, flaky croissants, celebratory cakes, soft cookies, and specialty coffees.',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<Product | null>(null);

  // Sync category param
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filter options with item counts
  const filterOptions: FilterOption[] = useMemo(() => {
    const allCount = PRODUCTS.length;
    const catOptions = CATEGORIES.map((c) => ({
      id: c.id,
      label: c.name,
      count: PRODUCTS.filter((p) => p.category === c.id).length,
    }));
    return [{ id: 'all', label: 'All Bakes', count: allCount }, ...catOptions];
  }, []);

  // Filtered products based on category & search term
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        searchTerm.trim() === '' ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags?.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div id="menu-page" className="w-full">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#EBE1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B85D43] mb-2 block">
            The Bakehouse Catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C2420] tracking-tight leading-tight">
            Our Menu &amp; Daily Bakes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#7E716A] max-w-xl mx-auto leading-relaxed font-normal">
            Bred with natural starters, laminated with pure butter, and layered with seasonal fruit and premium chocolate.
          </p>
          <p className="text-xs text-[#7E716A]/75 mt-2 italic">
            * All menu pricing shown is fictional demo data for portfolio presentation.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              id="menu-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search croissants, sourdough, cakes, cookies..."
              className="w-full pl-11 pr-10 py-3.5 rounded-full text-sm bg-white border border-[#EBE1D7] focus:border-[#B85D43] text-[#2C2420] placeholder:text-[#7E716A]/70 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#B85D43]/20 transition-all"
            />
            <Search className="w-4 h-4 text-[#7E716A] absolute left-4 top-4" />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="p-1 rounded-full text-[#7E716A] hover:text-[#2C2420] absolute right-3.5 top-3.5"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Visual Category Quick-Browse Cards */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(isSelected ? 'all' : cat.id)}
                  className={`group text-left rounded-2xl p-2.5 transition-all duration-300 border flex flex-col items-center sm:items-start text-center sm:text-left cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#B85D43] shadow-md ring-2 ring-[#B85D43]/20'
                      : 'bg-white/80 hover:bg-white border-[#EBE1D7] hover:border-[#D9CBC2] shadow-xs'
                  }`}
                >
                  <div className="aspect-square w-full rounded-xl overflow-hidden mb-2.5 bg-[#F5EFEB] relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 transition-opacity ${
                        isSelected ? 'bg-[#B85D43]/15' : 'bg-black/10 group-hover:bg-transparent'
                      }`}
                    />
                  </div>
                  <span
                    className={`font-serif text-sm font-medium leading-tight block ${
                      isSelected ? 'text-[#B85D43]' : 'text-[#2C2420] group-hover:text-[#B85D43]'
                    }`}
                  >
                    {cat.name}
                  </span>
                  <span className="text-[11px] text-[#7E716A] mt-0.5">
                    {PRODUCTS.filter((p) => p.category === cat.id).length} bakes
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sticky Category Nav & Controls */}
      <div className="sticky top-[69px] z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EBE1D7] py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <CategoryFilter
            options={filterOptions}
            selectedId={selectedCategory}
            onChange={handleCategoryChange}
          />
          <div className="text-xs text-[#7E716A] font-medium hidden sm:block shrink-0">
            Showing <span className="text-[#2C2420] font-semibold">{filteredProducts.length}</span> items
          </div>
        </div>
      </div>

      {/* Category Spotlight when a specific category is selected */}
      {selectedCategory !== 'all' && (() => {
        const currentCat = CATEGORIES.find((c) => c.id === selectedCategory);
        if (!currentCat) return null;
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className="rounded-2xl bg-[#FAF8F5] border border-[#EBE1D7] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center shadow-xs">
              <div className="md:col-span-4 h-48 sm:h-56 md:h-full min-h-[180px] relative overflow-hidden bg-[#F5EFEB]">
                <img
                  src={currentCat.image}
                  alt={currentCat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 via-transparent to-transparent" />
              </div>
              <div className="md:col-span-8 p-6 sm:p-8">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B85D43]">
                  Category Spotlight
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2420] mt-1 mb-2 font-normal">
                  {currentCat.name}
                </h2>
                <p className="text-sm text-[#7E716A] leading-relaxed max-w-2xl">
                  {currentCat.description} Handcrafted each morning with patient slow fermentation, European cultured butter, and fresh seasonal ingredients.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[#4A3E39]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#B85D43]" />
                    {filteredProducts.length} Items Available Today
                  </span>
                  <span className="text-[#D9CBC2]">•</span>
                  <span>Fresh Morning Batch from 7:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Products Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#EBE1D7] flex items-center justify-center mx-auto mb-4 text-[#7E716A]">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#2C2420] font-medium">
                No bakes found
              </h3>
              <p className="text-sm text-[#7E716A] mt-2 mb-6">
                We couldn't find any menu item matching "{searchTerm}". Try another search term or browse our categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#B85D43] text-white hover:bg-[#98452E]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEnquire={(prod) => setSelectedProductForEnquiry(prod)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Special Celebration Banner */}
      <section className="py-12 bg-[#F5EFEB] border-t border-[#EBE1D7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-[#EBE1D7] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-36 h-36 rounded-xl overflow-hidden shrink-0 bg-[#FAF8F5]">
              <img
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&auto=format&fit=crop&q=80"
                alt="Celebration tiered cake"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#B85D43]">
                Need a Custom Cake or Bulk Pastry Box?
              </span>
              <h3 className="font-serif text-2xl text-[#2C2420] font-normal mt-1">
                Bespoke Tiers, Dietary Adjustments &amp; Event Platters
              </h3>
              <p className="text-xs sm:text-sm text-[#7E716A] mt-1.5 leading-relaxed">
                Consult directly with our pastry chefs to create something tailored for your special milestone.
              </p>
            </div>
            <Link
              to="/custom-orders"
              className="shrink-0 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#2C2420] text-white hover:bg-[#B85D43] transition-colors flex items-center gap-2 shadow-xs active:scale-[0.98]"
            >
              <span>Custom Cake Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={!!selectedProductForEnquiry}
        onClose={() => setSelectedProductForEnquiry(null)}
        targetItem={selectedProductForEnquiry}
      />
    </div>
  );
};
