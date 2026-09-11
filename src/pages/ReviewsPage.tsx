import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, MessageSquare, ArrowUpRight, Star } from 'lucide-react';
import { usePageSeo } from '../hooks/usePageSeo';
import { SectionHeading } from '../components/SectionHeading';
import { ReviewCard } from '../components/ReviewCard';
import { CTASection } from '../components/CTASection';
import { REVIEWS } from '../data/reviews';

export const ReviewsPage: React.FC = () => {
  usePageSeo({
    title: 'Crumb & Co. | Customer Reviews',
    description:
      'Read words and experiences from our community enjoying our sourdough loaves, morning croissants, and custom celebration cakes.',
  });

  return (
    <div id="reviews-page" className="w-full">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EBE1D7] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFEB] border border-[#EBE1D7] text-xs uppercase tracking-[0.2em] font-medium text-[#B85D43] mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>Community Words</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#2C2420] tracking-tight leading-tight">
            Sweet Words <br />
            <span className="italic text-[#B85D43]">From Our Community</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#7E716A] max-w-xl mx-auto leading-relaxed font-normal">
            A collection of fictional demo feedback highlighting our commitment to texture, delicate frosting, and dependable event delivery.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#EBE1D7] text-xs text-[#7E716A]">
            <span className="w-2 h-2 rounded-full bg-[#C2934D]" />
            <span>Fictional Portfolio Testimonials • Created for Demo Presentation</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Celebration Moments Photo Showcase */}
          <div className="mt-20 pt-16 border-t border-[#EBE1D7]">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#B85D43] block mb-2">
                Real Celebrations
              </span>
              <h3 className="font-serif text-3xl text-[#2C2420] font-normal">
                Moments Worth Sharing
              </h3>
              <p className="text-sm text-[#7E716A] mt-2">
                Snapshots from our community's birthday parties, anniversary tables, and quiet weekend mornings.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="group relative aspect-4/5 rounded-2xl overflow-hidden shadow-xs border border-[#EBE1D7]">
                <img
                  src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80"
                  alt="Birthday celebration with cake and candles"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-medium">Ananya's 25th Birthday</span>
                </div>
              </div>

              <div className="group relative aspect-4/5 rounded-2xl overflow-hidden shadow-xs border border-[#EBE1D7]">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80"
                  alt="Wedding cake table setup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-medium">Vikram & Radhika's Wedding</span>
                </div>
              </div>

              <div className="group relative aspect-4/5 rounded-2xl overflow-hidden shadow-xs border border-[#EBE1D7]">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
                  alt="Sunday morning coffee and warm croissants"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-medium">Sunday Morning Coffee Table</span>
                </div>
              </div>

              <div className="group relative aspect-4/5 rounded-2xl overflow-hidden shadow-xs border border-[#EBE1D7]">
                <img
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop&q=80"
                  alt="Baby shower dessert platter"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-medium">Arjun & Priya's Baby Shower</span>
                </div>
              </div>
            </div>
          </div>

          {/* Demonstration Notice */}
          <div className="mt-16 p-8 rounded-3xl bg-[#FAF8F5] border border-[#EBE1D7] max-w-3xl mx-auto text-center space-y-3">
            <h3 className="font-serif text-2xl text-[#2C2420] font-normal">
              Portfolio &amp; Client Customization
            </h3>
            <p className="text-sm text-[#7E716A] leading-relaxed max-w-xl mx-auto">
              When launching for an active bakery client, this section seamlessly connects to verified Google Maps Reviews or an automated post-order feedback questionnaire.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Ready to Order */}
      <CTASection
        heading="Ready to Order?"
        supportingText="Tell us about your upcoming celebration or browse our daily bakery menu."
        primaryButtonText="Create Your Custom Cake"
        primaryButtonLink="/custom-orders"
        secondaryButtonText="Explore Daily Menu"
        secondaryButtonLink="/menu"
        variant="warm"
      />
    </div>
  );
};
