import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCount: number;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount,
}) => {
  // Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300 select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Bar Controls */}
      <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white/90 z-20 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
            {item.categoryLabel}
          </span>
          <span className="text-xs text-white/70">
            {currentIndex + 1} / {totalCount}
          </span>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Nav Controls: Prev */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous image"
        className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white transition-all backdrop-blur-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Stage */}
      <div className="relative max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&auto=format&fit=crop&q=80';
          }}
          className="max-h-[75vh] max-w-full w-auto object-contain rounded-lg shadow-2xl transition-all duration-300"
        />

        {/* Caption */}
        <div className="mt-4 text-center">
          <h3 className="text-white text-base sm:text-lg font-serif font-medium">
            {item.title}
          </h3>
          <p className="text-white/60 text-xs mt-0.5">
            Crumb &amp; Co. Kitchen Archives
          </p>
        </div>
      </div>

      {/* Nav Controls: Next */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next image"
        className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white transition-all backdrop-blur-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
