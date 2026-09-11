import React from 'react';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface CategoryFilterProps {
  options: FilterOption[];
  selectedId: string;
  onChange: (id: string) => void;
  className?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  options,
  selectedId,
  onChange,
  className = '',
}) => {
  return (
    <div
      role="tablist"
      aria-label="Filter categories"
      className={`flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap sm:flex-wrap ${className}`}
    >
      {options.map((opt) => {
        const isSelected = selectedId === opt.id;
        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onChange(opt.id)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B85D43] ${
              isSelected
                ? 'bg-[#2C2420] text-[#FAF8F5] shadow-xs'
                : 'bg-white text-[#4A3E39] border border-[#EBE1D7] hover:border-[#D9CBC2] hover:bg-[#FAF8F5]'
            }`}
          >
            <span>{opt.label}</span>
            {typeof opt.count === 'number' && (
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected
                    ? 'bg-white/20 text-[#FAF8F5]'
                    : 'bg-[#F5EFEB] text-[#7E716A]'
                }`}
              >
                {opt.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
