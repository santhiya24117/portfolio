import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CakeItem } from '../types';

interface CakeCardProps {
  cake: CakeItem;
  onEnquire?: (cake: CakeItem) => void;
}

export const CakeCard: React.FC<CakeCardProps> = ({ cake, onEnquire }) => {
  return (
    <div
      id={`cake-card-${cake.id}`}
      className="group bg-white rounded-2xl border border-[#EBE1D7] overflow-hidden flex flex-col hover:border-[#D9CBC2] hover:shadow-lg transition-all duration-300"
    >
      {/* Editorial Cake Image */}
      <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden bg-[#F5EFEB]">
        <img
          src={cake.image}
          alt={cake.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=1000&auto=format&fit=crop&q=80';
          }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/30 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

        {/* Category Pill */}
        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#2C2420] text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full shadow-xs">
          {cake.category}
        </span>

        {cake.featured && (
          <span className="absolute top-4 right-4 bg-[#B85D43] text-white text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full shadow-xs">
            Signature Design
          </span>
        )}
      </div>

      {/* Details */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          {/* Flavor tag */}
          <div className="text-xs uppercase tracking-wider text-[#B85D43] font-semibold mb-1.5 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Flavor Profile: {cake.flavor}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-[1.65rem] font-medium text-[#2C2420] leading-snug group-hover:text-[#B85D43] transition-colors mb-2.5">
            {cake.name}
          </h3>

          <p className="text-sm text-[#7E716A] leading-relaxed mb-5 font-normal">
            {cake.description}
          </p>

          {/* Sizes info */}
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-[#7E716A] font-medium block mb-2">
              Available Sizes
            </span>
            <div className="flex flex-wrap gap-2">
              {cake.availableSizes.map((size) => (
                <span
                  key={size}
                  className="text-xs bg-[#FAF8F5] text-[#2C2420] font-medium border border-[#EBE1D7] px-2.5 py-1 rounded-lg"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="pt-4 border-t border-[#F5EFEB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#7E716A] block">Starting from</span>
            <span className="font-serif text-xl sm:text-2xl font-medium text-[#2C2420]">
              {cake.formattedPrice}
            </span>
          </div>

          {onEnquire ? (
            <button
              type="button"
              onClick={() => onEnquire(cake)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#2C2420] text-[#FAF8F5] hover:bg-[#B85D43] transition-colors shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <span>Enquire About This Cake</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link
              to={`/custom-orders?cake=${encodeURIComponent(cake.name)}&flavor=${encodeURIComponent(cake.flavor)}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#2C2420] text-[#FAF8F5] hover:bg-[#B85D43] transition-colors shadow-xs active:scale-[0.98]"
            >
              <span>Enquire About This Cake</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
