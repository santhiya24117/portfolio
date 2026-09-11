import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.2em] text-[#B85D43] font-medium mb-2.5">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-normal text-[#2C2420] tracking-tight leading-[1.18]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-[#7E716A] leading-relaxed max-w-xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
