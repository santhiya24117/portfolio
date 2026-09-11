import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Navigation, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const ContactCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Contact Details Column */}
      <div className="lg:col-span-6 bg-white rounded-3xl border border-[#EBE1D7] p-8 sm:p-10 flex flex-col justify-between shadow-xs">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#B85D43]">
            Bakery Location &amp; Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C2420] mt-1.5 mb-6">
            Visit Crumb &amp; Co.
          </h2>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F5EFEB] flex items-center justify-center shrink-0 text-[#B85D43]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#7E716A]">Address</h3>
                <p className="text-base text-[#2C2420] font-medium mt-0.5">
                  {BUSINESS_INFO.address.street}
                </p>
                <p className="text-sm text-[#7E716A]">
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postalCode}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F5EFEB] flex items-center justify-center shrink-0 text-[#B85D43]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#7E716A]">Phone / WhatsApp</h3>
                <p className="text-base text-[#2C2420] font-medium mt-0.5">
                  {BUSINESS_INFO.phone}
                </p>
                <p className="text-xs text-[#7E716A]">Available during bakehouse hours</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F5EFEB] flex items-center justify-center shrink-0 text-[#B85D43]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#7E716A]">Email Enquiries</h3>
                <p className="text-base text-[#2C2420] font-medium mt-0.5">
                  {BUSINESS_INFO.email}
                </p>
                <p className="text-xs text-[#7E716A]">We reply within 24 hours</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F5EFEB] flex items-center justify-center shrink-0 text-[#B85D43]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#7E716A]">Opening Hours</h3>
                <div className="text-sm text-[#2C2420] mt-1 space-y-1">
                  <p><span className="font-medium">Monday – Saturday:</span> {BUSINESS_INFO.openingHours.monSat}</p>
                  <p><span className="font-medium">Sunday:</span> {BUSINESS_INFO.openingHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-8 border-t border-[#F5EFEB] mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-center bg-[#F5EFEB] hover:bg-[#EBE1D7] text-[#2C2420] transition-colors"
          >
            Call
          </a>
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-center bg-[#F5EFEB] hover:bg-[#EBE1D7] text-[#2C2420] transition-colors"
          >
            Email
          </a>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(
              `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-center bg-[#F5EFEB] hover:bg-[#EBE1D7] text-[#2C2420] transition-colors flex items-center justify-center gap-1"
          >
            <span>Directions</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <Link
            to="/custom-orders"
            className="px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-center bg-[#B85D43] text-white hover:bg-[#98452E] transition-colors"
          >
            Custom Order
          </Link>
        </div>
      </div>

      {/* Map & Bakery Atmosphere Column */}
      <div className="lg:col-span-6 bg-white rounded-3xl border border-[#EBE1D7] overflow-hidden flex flex-col shadow-xs">
        {/* Map Header Preview with Real Map Cartography Visual */}
        <div className="relative h-64 sm:h-72 w-full bg-[#EBE1D7] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000&auto=format&fit=crop&q=80"
            alt="Map location of Crumb & Co. Bakehouse, Coimbatore"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle map overlay tint for bakery branding */}
          <div className="absolute inset-0 bg-[#2C2420]/30 backdrop-contrast-125" />

          {/* Floating Location Card */}
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/50 shadow-lg max-w-xs sm:max-w-sm w-full animate-fade-in">
              <div className="w-10 h-10 rounded-full bg-[#B85D43] text-white flex items-center justify-center mx-auto shadow-md mb-2.5">
                <Navigation className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-medium text-[#2C2420]">
                Coimbatore Bakehouse &amp; Studio
              </h4>
              <p className="text-xs text-[#7E716A] mt-1 mb-3">
                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2C2420] text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-[#B85D43] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[11px] font-medium text-[#2C2420] px-2.5 py-1 rounded-full border border-[#EBE1D7] shadow-xs">
            Live Bakehouse Location
          </div>
        </div>

        {/* Bakery atmosphere card with image */}
        <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between bg-[#FAF8F5]">
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-full sm:w-28 h-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-[#EBE1D7]">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&auto=format&fit=crop&q=80"
                alt="Crumb & Co. consultation studio and warm bakehouse counter"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#B85D43] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bakehouse Pickup &amp; Studio</span>
              </div>
              <h4 className="font-serif text-lg text-[#2C2420] font-medium mb-1.5">
                Cake Tastings &amp; Consultations
              </h4>
              <p className="text-xs sm:text-sm text-[#7E716A] leading-relaxed">
                Planning a wedding or milestone celebration? We host scheduled tasting sessions and custom tier consultations during weekday afternoons in our cozy Coimbatore studio.
              </p>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#EBE1D7] flex items-center justify-between text-xs text-[#7E716A]">
            <span>Dedicated customer parking available</span>
            <span className="font-medium text-[#2C2420]">Wheelchair accessible</span>
          </div>
        </div>
      </div>
    </div>
  );
};
