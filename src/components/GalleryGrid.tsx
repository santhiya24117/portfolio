import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';
import { Lightbox } from './Lightbox';

interface GalleryGridProps {
  items: GalleryItem[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setActiveItemIndex(index);
  };

  const handleClose = () => {
    setActiveItemIndex(null);
  };

  const handleNext = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % items.length);
    }
  };

  const handlePrev = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + items.length) % items.length);
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-[#EBE1D7]">
        <p className="font-serif text-xl text-[#2C2420]">No photographs found</p>
        <p className="text-sm text-[#7E716A] mt-2">Try selecting a different category filter.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => {
          // Dynamic height classes based on aspect ratio
          const aspectClass =
            item.aspectRatio === 'portrait'
              ? 'aspect-3/4'
              : item.aspectRatio === 'landscape'
              ? 'aspect-16/10'
              : 'aspect-square';

          return (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => handleOpen(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#F5EFEB] border border-[#EBE1D7] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className={`w-full ${aspectClass} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Hover overlay with title & icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#FAF8F5]/80 font-medium">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-serif text-lg font-medium text-white leading-snug mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center shrink-0 ml-3">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeItemIndex !== null && items[activeItemIndex] && (
        <Lightbox
          item={items[activeItemIndex]}
          currentIndex={activeItemIndex}
          totalCount={items.length}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};
