import React from 'react';
import { Sparkles, Calendar, MessageSquare, CheckCircle2, HeartHandshake } from 'lucide-react';
import { usePageSeo } from '../hooks/usePageSeo';
import { SectionHeading } from '../components/SectionHeading';
import { OrderForm } from '../components/OrderForm';

export const CustomOrdersPage: React.FC = () => {
  usePageSeo({
    title: 'Custom Cake Orders | Crumb & Co.',
    description:
      'Commission a bespoke custom cake for your birthday, wedding, anniversary or special celebration. Submit your cake enquiry with Crumb & Co.',
  });

  const steps = [
    {
      step: '01',
      title: 'Submit Your Vision',
      desc: 'Fill in your event date, expected guest count, favorite flavor, and attach any mood board or reference imagery.',
      icon: Calendar,
      image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&auto=format&fit=crop&q=80',
    },
    {
      step: '02',
      title: 'Design & Quote',
      desc: 'Our cake designer will review your notes within 24 hours to confirm oven availability, flavor balance, and provide an exact estimate.',
      icon: MessageSquare,
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80',
    },
    {
      step: '03',
      title: 'Baked & Celebrated',
      desc: 'We bake fresh to order on the morning of your event, packing your cake safely for bakehouse pickup or refrigerated delivery.',
      icon: HeartHandshake,
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&auto=format&fit=crop&q=80',
    },
  ];

  const inspirationStyles = [
    {
      title: 'Botanical & Pressed Flora',
      desc: 'Edible organic petals, chamomile buds, and delicate rosemary sprigs pressed into silky buttercream.',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Architectural Wedding Tiers',
      desc: 'Minimalist smooth fondant or textured buttercream with neutral silk ribbons and modern proportions.',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Palette Knife Spatula Texture',
      desc: 'Artistic painterly brushstrokes in custom pastel or warm terracotta color themes.',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Semi-Naked Vintage Rustic',
      desc: 'Subtle exposed sponge layers paired with fresh seasonal berries and vanilla bean glaze.',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div id="custom-orders-page" className="w-full">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EBE1D7] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFEB] border border-[#EBE1D7] text-[#B85D43] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Cake Studio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#2C2420] tracking-tight leading-tight">
            Your Idea. <span className="italic text-[#B85D43]">Our Oven.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#7E716A] max-w-xl mx-auto leading-relaxed font-normal">
            Tell us what you're celebrating and we'll help bring your cake idea to life with balanced flavors and artisanal presentation.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#EBE1D7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#B85D43] block mb-2">
              Our Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal">
              From Consultation to Celebration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#EBE1D7] flex flex-col justify-between shadow-xs group"
                >
                  <div className="relative aspect-16/10 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs font-serif text-sm font-semibold text-[#B85D43] shadow-xs">
                      Step {s.step}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-white border border-[#EBE1D7] flex items-center justify-center text-[#B85D43]">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="font-serif text-xl font-medium text-[#2C2420]">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#7E716A] leading-relaxed font-normal mt-2">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Cake Styles & Inspiration */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#EBE1D7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Design Inspiration"
            title="Custom Cake Styles We Love Crafting"
            subtitle="Explore popular finishes and aesthetic motifs. You can reference any of these in your order form."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspirationStyles.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden border border-[#EBE1D7] shadow-xs hover:border-[#D9CBC2] hover:shadow-sm transition-all group"
              >
                <div className="aspect-square overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg font-medium text-[#2C2420] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#7E716A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commission Request"
            title="Custom Cake Enquiry Form"
            subtitle="Please share details below. Notice periods: 3 days for standard bakes, 7 days for tiered celebration cakes."
            align="center"
            className="mb-12"
          />

          <OrderForm />
        </div>
      </section>

      {/* FAQ notes */}
      <section className="py-16 bg-white border-t border-[#EBE1D7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-2xl sm:text-3xl text-center text-[#2C2420] font-normal mb-8">
            Helpful Ordering Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#4A3E39]">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EBE1D7]">
              <h4 className="font-serif text-lg font-medium text-[#2C2420] mb-1">
                How far in advance should I order?
              </h4>
              <p className="text-[#7E716A] leading-relaxed">
                We recommend at least 3-4 days notice for single-tier celebration cakes, and 2-3 weeks for tiered wedding cakes and dessert tables.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EBE1D7]">
              <h4 className="font-serif text-lg font-medium text-[#2C2420] mb-1">
                Can you match a specific color theme?
              </h4>
              <p className="text-[#7E716A] leading-relaxed">
                Yes! We work with natural food-safe pigments and botanical elements to closely complement your invitations and event styling.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EBE1D7]">
              <h4 className="font-serif text-lg font-medium text-[#2C2420] mb-1">
                Pickup &amp; Delivery options
              </h4>
              <p className="text-[#7E716A] leading-relaxed">
                Pickup is available at our Baker's Lane studio. Refrigerated delivery can be coordinated across Coimbatore and surrounding areas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EBE1D7]">
              <h4 className="font-serif text-lg font-medium text-[#2C2420] mb-1">
                Portfolio Demo Information
              </h4>
              <p className="text-[#7E716A] leading-relaxed">
                This form demonstrates live client-side validation, image attachment previews, and submission state handling ready for Supabase or email APIs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
