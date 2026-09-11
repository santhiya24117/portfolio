import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onEnquire?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-[#EBE1D7] overflow-hidden flex flex-col h-full hover:border-[#D9CBC2] hover:shadow-md transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F5EFEB]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <div className="absolute top-3 left-3 bg-[#2C2420]/90 backdrop-blur-xs text-[#FAF8F5] text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#B85D43]" />
            <span>Favorite</span>
          </div>
        )}

        {/* Category Tag */}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#2C2420] text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl sm:text-[1.35rem] font-medium text-[#2C2420] leading-snug group-hover:text-[#B85D43] transition-colors">
              {product.name}
            </h3>
            <span className="font-medium text-base sm:text-lg text-[#2C2420] shrink-0 font-serif">
              {product.formattedPrice}
            </span>
          </div>

          <p className="text-sm text-[#7E716A] leading-relaxed line-clamp-2 mb-4 font-normal">
            {product.description}
          </p>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {product.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-[#FAF8F5] text-[#7E716A] border border-[#EBE1D7] px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-[#F5EFEB] flex items-center justify-between gap-3 mt-auto">
          <span className="text-[11px] text-[#7E716A] italic">
            Fresh daily
          </span>
          {onEnquire ? (
            <button
              type="button"
              onClick={() => onEnquire(product)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F5EFEB] text-[#2C2420] hover:bg-[#B85D43] hover:text-white transition-colors cursor-pointer"
            >
              <span>Order / Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link
              to={`/custom-orders?item=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F5EFEB] text-[#2C2420] hover:bg-[#B85D43] hover:text-white transition-colors"
            >
              <span>Order / Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
