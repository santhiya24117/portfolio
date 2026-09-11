import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, Home } from 'lucide-react';
import { usePageSeo } from '../hooks/usePageSeo';

export const NotFoundPage: React.FC = () => {
  usePageSeo({
    title: '404 - Page Not Found | Crumb & Co.',
    description: "Looks like you've wandered off the menu.",
  });

  return (
    <div id="not-found-page" className="min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-[#EBE1D7] shadow-xs">
        <div className="w-16 h-16 rounded-full bg-[#F5EFEB] flex items-center justify-center mx-auto text-[#B85D43]">
          <Sparkles className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B85D43]">
          404 Error
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal leading-tight">
          Looks like you've wandered off the menu.
        </h1>

        <p className="text-sm text-[#7E716A] leading-relaxed font-normal">
          The page you are looking for doesn't exist or has been moved. Let's get you back to warm pastries and fresh loaves.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#B85D43] text-white hover:bg-[#98452E] transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/menu"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold bg-white text-[#2C2420] border border-[#EBE1D7] hover:bg-[#FAF8F5] transition-all flex items-center justify-center gap-2"
          >
            <span>Browse Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
