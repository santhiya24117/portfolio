import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  Clock, 
  Compass, 
  Cake, 
  Gift, 
  PartyPopper, 
  Users, 
  Building2, 
  ArrowUpRight 
} from 'lucide-react';
import { usePageSeo } from '../hooks/usePageSeo';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';

export const AboutPage: React.FC = () => {
  usePageSeo({
    title: 'Crumb & Co. | About Our Bakery',
    description:
      'Learn about Crumb & Co., our philosophy of small-batch baking, artisanal sourdough, handcrafted pastries, and celebratory moments.',
  });

  const values = [
    {
      title: 'Freshness',
      description: 'Laminating butter, mixing pre-ferments, and firing ovens in the quiet morning hours so your pastry and bread are at their peak.',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Craft',
      description: 'Respecting traditional technique—long cold fermentation, patient folding, hand-rolled laminations, and delicate crumb structure.',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Creativity',
      description: 'Pairing timeless pastry foundations with nuanced seasonal flavor profiles—from Meyer lemon botanicals to roasted pistachio praline.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Care',
      description: 'Treating every birthday, anniversary, and everyday morning breakfast with equal reverence, precision, and heartfelt presentation.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80',
    },
  ];

  const celebrations = [
    {
      name: 'Birthdays',
      desc: 'Bespoke cakes tailored to personality, age, and flavor preferences.',
      icon: PartyPopper,
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: 'Anniversaries',
      desc: 'Romantic botanical single or multi-tier designs with delicate texturing.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: 'Weddings',
      desc: 'Architectural wedding tiers, dessert grazing tables, and tasting consultations.',
      icon: Cake,
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: 'Baby Showers',
      desc: 'Soft pastel watercolor palettes, miniature tarts, and delicate macarons.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: 'Corporate Events',
      desc: 'Morning viennoiserie platters, artisan sandwich loaves, and branded dessert boxes.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: 'Festive Gifting',
      desc: 'Handcrafted cookie hampers, tea cakes, and seasonal celebration boxes.',
      icon: Gift,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&auto=format&fit=crop&q=80',
    },
  ];

  const artisans = [
    {
      name: 'Aditi Sundaram',
      role: 'Founding Pastry Chef & Viennoiserie Lead',
      bio: 'Trained in classic French lamination with 12 years perfecting butter folds, fruit purées, and sourdough starters.',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&auto=format&fit=crop&q=80',
    },
    {
      name: 'Raghavan Pillai',
      role: 'Head Hearth Baker',
      bio: 'Master of slow 36-hour cold fermentations and rustic hearth breads using stone-milled grains and natural leaven.',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=700&auto=format&fit=crop&q=80',
    },
    {
      name: 'Maya Chen',
      role: 'Celebration Cake Sculptor & Floral Stylist',
      bio: 'Specialist in architectural tiers, hand-piped botanicals, and delicate Swiss meringue buttercreams.',
      image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=700&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div id="about-page" className="w-full">
      {/* 1. HERO */}
      <section className="relative py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EBE1D7] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B85D43] mb-3 block">
            The Crumb &amp; Co. Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C2420] tracking-tight leading-tight">
            Where Every Bake <br />
            <span className="italic text-[#B85D43]">Has a Story.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#7E716A] max-w-2xl mx-auto leading-relaxed font-normal">
            Crumb &amp; Co. was conceived as a celebration of honest flour, patient time, and the communal joy that comes from sharing something warm from the oven.
          </p>
        </div>

        {/* Hero Visual Image Gallery Strip */}
        <div className="mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#EBE1D7] shadow-sm relative group bg-[#F5EFEB]">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=85"
                alt="Artisan sourdough bakery hearth table"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=85';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#FAF8F5]/80 font-semibold block">The Hearth</span>
                <p className="font-serif text-sm font-medium">Stone Oven Bakes Since 2021</p>
              </div>
            </div>

            <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#EBE1D7] shadow-sm relative group bg-[#F5EFEB]">
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&auto=format&fit=crop&q=85"
                alt="Baker gently kneading slow fermented dough"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=85';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#FAF8F5]/80 font-semibold block">The Process</span>
                <p className="font-serif text-sm font-medium">36-Hour Natural Fermentation</p>
              </div>
            </div>

            <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#EBE1D7] shadow-sm relative group bg-[#F5EFEB]">
              <img
                src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=800&auto=format&fit=crop&q=85"
                alt="Botanical decorated celebration cake studio"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&auto=format&fit=crop&q=85';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#FAF8F5]/80 font-semibold block">The Studio</span>
                <p className="font-serif text-sm font-medium">Handcrafted Celebration Tiers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative subtle element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5EFEB] rounded-full blur-3xl -z-0 opacity-60 pointer-events-none" />
      </section>

      {/* 2. OUR PHILOSOPHY */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#B85D43]">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal leading-tight">
                Small-Batch Baking, <br />
                Thoughtful Recipes.
              </h2>
              <p className="text-base sm:text-lg text-[#7E716A] leading-relaxed font-normal">
                Good baking cannot be hurried. We build our recipes around balanced sweetness, distinct aromas, and slow processes that bring out natural depth without relying on artificial shortcuts.
              </p>
              
              <div className="space-y-4 pt-2 text-sm text-[#4A3E39] font-normal">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F5EFEB] flex items-center justify-center shrink-0 text-[#B85D43] mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#2C2420] font-medium">Small-Batch Baking:</strong> We bake in measured quantities throughout the morning to ensure crispness, moisture retention, and fresh aroma.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F5EFEB] flex items-center justify-center shrink-0 text-[#B85D43] mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#2C2420] font-medium">Thoughtful Formulations:</strong> Layering quality dairy, fine cocoa, Madagascar vanilla beans, and wild fruit compotes.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F5EFEB] flex items-center justify-center shrink-0 text-[#B85D43] mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#2C2420] font-medium">Attention to Detail:</strong> From hand-crimped tart edges to the delicate botanical finishing on our custom wedding tiers.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-lg border border-[#EBE1D7]">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&auto=format&fit=crop&q=85"
                  alt="Baker inspecting freshly baked goods in warm light"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#2C2420] text-[#FAF8F5] p-6 rounded-2xl max-w-xs shadow-xl hidden sm:block">
                <p className="font-serif italic text-base leading-snug">
                  "Baking is a daily rhythm of patience, heat, and joy."
                </p>
                <span className="text-[11px] uppercase tracking-wider text-[#C48E80] mt-2 block font-medium">
                  The Kitchen Team
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE CRUMB & CO. EXPERIENCE */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-y border-[#EBE1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=85"
                    alt="Golden croissants"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-sm mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=800&auto=format&fit=crop&q=85"
                    alt="Celebration cake finish"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#B85D43]">
                The Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal leading-tight">
                Craftsmanship in Every Slice
              </h2>
              <p className="text-base sm:text-lg text-[#7E716A] leading-relaxed font-normal">
                Whether you drop in for an early morning espresso and still-warm pain au chocolat, or consult with us for months on your bespoke multi-tiered wedding centerpiece, we curate every touchpoint with warmth and discretion.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4 text-left">
                <div className="p-4 rounded-xl bg-white border border-[#EBE1D7]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B85D43]">Visual Grace</span>
                  <p className="text-sm text-[#4A3E39] mt-1">Clean lines, refined color palettes, and natural botanical garnishes.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#EBE1D7]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B85D43]">Reliable Timing</span>
                  <p className="text-sm text-[#4A3E39] mt-1">Carefully managed consultation and delivery schedules for every event.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3.5 MEET THE KITCHEN ARTISANS */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#EBE1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Hands Behind The Craft"
            title="Meet Our Kitchen Artisans"
            subtitle="From sunrise lamination to delicate celebration piping, our team brings decades of culinary passion to every bake."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <div
                key={artisan.name}
                className="rounded-2xl bg-[#FAF8F5] border border-[#EBE1D7] overflow-hidden hover:border-[#D9CBC2] hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="aspect-4/3 overflow-hidden relative bg-[#F5EFEB]">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=700&auto=format&fit=crop&q=80';
                    }}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#2C2420] font-medium">
                      {artisan.name}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-[#B85D43] font-semibold mt-1 block">
                      {artisan.role}
                    </span>
                    <p className="text-sm text-[#7E716A] mt-3 leading-relaxed">
                      {artisan.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Foundation"
            title="The Values Behind Our Oven"
            subtitle="Four core principles guide how we mix, fold, bake, and share."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-[#FAF8F5] rounded-2xl border border-[#EBE1D7] overflow-hidden flex flex-col justify-between hover:border-[#D9CBC2] hover:shadow-sm transition-all group"
                >
                  <div className="aspect-16/10 overflow-hidden relative">
                    <img
                      src={v.image}
                      alt={v.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs border border-[#EBE1D7] flex items-center justify-center text-[#B85D43] shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-[#2C2420] mb-2">
                        {v.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#7E716A] leading-relaxed font-normal">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CELEBRATIONS SECTION */}
      <section className="py-20 sm:py-24 bg-[#F5EFEB]/50 border-t border-[#EBE1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Celebration Studio"
            title="Moments We Love Crafting For"
            subtitle="We partner with clients to conceptualize cakes and dessert spreads for life's sweetest milestones."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {celebrations.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.name}
                  className="bg-white rounded-2xl border border-[#EBE1D7] overflow-hidden flex flex-col justify-between hover:shadow-sm transition-all group"
                >
                  <div className="aspect-16/10 overflow-hidden relative bg-[#FAF8F5]">
                    <img
                      src={c.image}
                      alt={c.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs border border-[#EBE1D7] flex items-center gap-1.5 text-xs text-[#2C2420] font-medium shadow-xs">
                      <Icon className="w-3.5 h-3.5 text-[#B85D43]" />
                      <span>{c.name}</span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-lg font-medium text-[#2C2420] mb-1">
                      {c.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7E716A] leading-relaxed font-normal">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/custom-orders"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#B85D43] text-white hover:bg-[#98452E] transition-all shadow-sm active:scale-[0.98]"
            >
              <span>Plan Your Celebration</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection
        heading="Experience the Warmth."
        supportingText="Visit our Coimbatore bakehouse or enquire about your upcoming special event cake."
        primaryButtonText="View Bakery Menu"
        primaryButtonLink="/menu"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        variant="warm"
      />
    </div>
  );
};
