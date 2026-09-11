import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  heading?: string;
  supportingText?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: 'warm' | 'cream' | 'terracotta';
}

export const CTASection: React.FC<CTASectionProps> = ({
  heading = "Dream It. We'll Bake It.",
  supportingText = "Planning a birthday, wedding, anniversary or special celebration? Tell us what you're imagining and let's craft something unforgettable.",
  primaryButtonText = 'Create Your Custom Cake',
  primaryButtonLink = '/custom-orders',
  secondaryButtonText,
  secondaryButtonLink,
  variant = 'warm',
}) => {
  const bgStyles = {
    warm: 'bg-[#F5EFEB] border border-[#EBE1D7] text-[#2C2420]',
    cream: 'bg-[#FAF8F5] border border-[#EBE1D7] text-[#2C2420]',
    terracotta: 'bg-[#B85D43] text-white',
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden ${bgStyles[variant]} shadow-xs`}>
          
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/40 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#EBE1D7]/40 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#B85D43]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Celebrations</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-normal leading-tight">
              {heading}
            </h2>

            <p className="text-base sm:text-lg text-[#7E716A] leading-relaxed max-w-xl mx-auto font-normal">
              {supportingText}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to={primaryButtonLink}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#B85D43] text-white hover:bg-[#98452E] shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <span>{primaryButtonText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  to={secondaryButtonLink}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-white text-[#2C2420] border border-[#EBE1D7] hover:border-[#D9CBC2] hover:bg-[#FAF8F5] transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <span>{secondaryButtonText}</span>
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
