import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Sparkles
} from 'lucide-react';
import { usePageSeo } from '../hooks/usePageSeo';
import { SectionHeading } from '../components/SectionHeading';
import { ContactCard } from '../components/ContactCard';
import { BUSINESS_INFO } from '../data/business';

export const ContactPage: React.FC = () => {
  usePageSeo({
    title: 'Contact Crumb & Co. Bakery',
    description:
      'Get in touch with Crumb & Co. in Coimbatore. View our opening hours, address, phone number, and directions to our bakehouse.',
  });

  // Simple general message form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Question');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    // Simulate brief send delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 700);
  };

  return (
    <div id="contact-page" className="w-full">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EBE1D7] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFEB] border border-[#EBE1D7] text-xs uppercase tracking-[0.2em] font-medium text-[#B85D43] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>We'd Love to Hear From You</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#2C2420] tracking-tight leading-tight">
            Come Say Hello.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#7E716A] max-w-xl mx-auto leading-relaxed font-normal">
            Whether you have a question about our daily sourdough batches, custom cake consultations, or dietary ingredients, our bakehouse team is here to assist.
          </p>
        </div>
      </section>

      {/* Main Details & Map Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCard />
        </div>
      </section>

      {/* Bakehouse Atmosphere Showcase Strip */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#EBE1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#B85D43] block mb-2">
              Bakehouse Ambience
            </span>
            <h3 className="font-serif text-3xl text-[#2C2420] font-normal">
              Step Inside Crumb &amp; Co.
            </h3>
            <p className="text-sm text-[#7E716A] mt-2">
              A glimpse into our Coimbatore bakehouse, morning pastry displays, and quiet consultation spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-2xl overflow-hidden border border-[#EBE1D7] bg-[#FAF8F5] shadow-xs">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop&q=80"
                  alt="Cozy bakery cafe counter and seating"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif text-base font-medium text-[#2C2420]">The Morning Counter</h4>
                <p className="text-xs text-[#7E716A] mt-1">Freshly baked croissants, baguettes, and morning brews from 8:00 AM.</p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-[#EBE1D7] bg-[#FAF8F5] shadow-xs">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
                  alt="Artisanal sourdough loaves on cooling racks"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif text-base font-medium text-[#2C2420]">The Sourdough Racks</h4>
                <p className="text-xs text-[#7E716A] mt-1">Slow 36-hour cold fermented sourdough boules cooling fresh from the stone hearth.</p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-[#EBE1D7] bg-[#FAF8F5] shadow-xs">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80"
                  alt="Custom celebration cake consultation display"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif text-base font-medium text-[#2C2420]">Consultation Studio</h4>
                <p className="text-xs text-[#7E716A] mt-1">Browse flavor samples, piping finishes, and wedding tier color palettes in person.</p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-[#EBE1D7] bg-[#FAF8F5] shadow-xs">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&auto=format&fit=crop&q=80"
                  alt="Pastry chef decorating freshly baked tarts"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif text-base font-medium text-[#2C2420]">Open Pastry Kitchen</h4>
                <p className="text-xs text-[#7E716A] mt-1">Watch our bakers hand-glaze fruit tarts and temper chocolate through the glass window.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Message Form */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#EBE1D7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quick Message"
            title="Drop Us a Line"
            subtitle="Have a quick question about pre-orders, corporate gifting, or wholesale loaves?"
            align="center"
            className="mb-10"
          />

          <div className="bg-white rounded-3xl border border-[#EBE1D7] p-8 sm:p-10 shadow-xs">
            {isSent ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-[#F5EFEB] text-[#B85D43] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#2C2420] mb-2 font-normal">
                  Message Sent!
                </h3>
                <p className="text-sm text-[#7E716A] max-w-md mx-auto leading-relaxed mb-6 font-normal">
                  Thank you for reaching out to Crumb &amp; Co. We have received your note and will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#2C2420] text-white hover:bg-[#4A3E39]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Meera"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. meera@example.com"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
                    Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
                  >
                    <option value="General Question">General Question</option>
                    <option value="Cake Consultation">Cake Consultation</option>
                    <option value="Corporate Gifting">Corporate Gifting</option>
                    <option value="Allergy Information">Allergy &amp; Dietary Information</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#B85D43] text-white hover:bg-[#98452E] flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.99] transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
