import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ReviewItem } from '../types';

interface ReviewCardProps {
  review: ReviewItem;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div
      id={`review-card-${review.id}`}
      className="bg-white rounded-2xl border border-[#EBE1D7] p-6 sm:p-7 flex flex-col justify-between h-full hover:border-[#D9CBC2] hover:shadow-sm transition-all duration-300 relative overflow-hidden group"
    >
      <Quote className="absolute top-4 right-4 w-10 h-10 text-[#F5EFEB] -z-0 pointer-events-none" />

      <div className="relative z-10">
        {/* Customer Header with Avatar */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {review.avatar ? (
              <img
                src={review.avatar}
                alt={review.name}
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover border border-[#EBE1D7] shadow-2xs shrink-0"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#EBE1D7] flex items-center justify-center font-serif text-sm font-semibold text-[#B85D43] shrink-0">
                {review.name.charAt(0)}
              </div>
            )}
            <div>
              <span className="font-semibold text-sm text-[#2C2420] block">
                {review.name}
              </span>
              {review.location && (
                <span className="text-[11px] text-[#7E716A] block">
                  {review.location}
                </span>
              )}
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-1 shrink-0" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < review.rating ? 'fill-[#C2934D] text-[#C2934D]' : 'text-[#EBE1D7]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review text */}
        <p className="text-sm sm:text-base text-[#2C2420] font-normal leading-relaxed mb-5 font-serif italic">
          "{review.review}"
        </p>
      </div>

      {/* Ordered Product Pill with Photo Thumbnail */}
      <div className="pt-4 border-t border-[#F5EFEB] flex items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2.5 min-w-0">
          {review.orderImage && (
            <img
              src={review.orderImage}
              alt={review.productPurchased}
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-lg object-cover border border-[#EBE1D7] shrink-0"
            />
          )}
          <div className="min-w-0">
            <span className="text-[10px] uppercase tracking-wider text-[#7E716A] block font-medium">
              Bake Ordered
            </span>
            <span className="text-xs text-[#B85D43] font-medium truncate block">
              {review.productPurchased}
            </span>
          </div>
        </div>

        <span className="text-[10px] uppercase tracking-wider text-[#7E716A]/75 font-medium shrink-0 bg-[#FAF8F5] px-2 py-0.5 rounded-full border border-[#EBE1D7]">
          Verified
        </span>
      </div>
    </div>
  );
};
