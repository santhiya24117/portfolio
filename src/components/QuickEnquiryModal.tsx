import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, Cake, Send } from 'lucide-react';
import { orderService } from '../services/orderService';
import { Product, CakeItem } from '../types';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetItem?: Product | CakeItem | null;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
  targetItem,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (targetItem) {
      setNotes(`Interested in: ${targetItem.name} (${'formattedPrice' in targetItem ? targetItem.formattedPrice : ''})`);
    } else {
      setNotes('');
    }
  }, [targetItem]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError('Please provide your name, phone number, and email.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      await orderService.submitEnquiry({
        customer_name: name,
        phone,
        email,
        event_type: 'Other',
        event_date: date || new Date().toISOString().split('T')[0],
        guests: '1-5',
        flavor: 'Custom',
        size: '1 kg',
        budget: 'Demo Request',
        description: notes || `Quick enquiry for ${targetItem?.name || 'bakery products'}`,
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Error sending enquiry');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl border border-[#EBE1D7] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#7E716A] hover:text-[#2C2420] rounded-full hover:bg-[#F5EFEB]"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-[#F5EFEB] rounded-full flex items-center justify-center mx-auto mb-4 text-[#B85D43]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#2C2420] mb-2 font-normal">
              Enquiry Received!
            </h3>
            <p className="text-sm text-[#7E716A] leading-relaxed mb-6 font-normal">
              Thank you for inquiring about <span className="font-medium text-[#2C2420]">{targetItem?.name || 'our bakes'}</span>. Our bakery team will be in touch with you promptly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#2C2420] text-white hover:bg-[#4A3E39]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#B85D43] font-semibold">
                Quick Enquiry
              </span>
              <h3 className="font-serif text-2xl text-[#2C2420] mt-1 font-normal">
                {targetItem ? targetItem.name : 'Enquire With Our Baker'}
              </h3>
              {targetItem && (
                <p className="text-xs text-[#7E716A] mt-0.5">
                  Starting at {targetItem.formattedPrice}
                </p>
              )}
            </div>

            {targetItem && targetItem.image && (
              <div className="flex items-center gap-3.5 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EBE1D7]">
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-[#F5EFEB]">
                  <img
                    src={targetItem.image}
                    alt={targetItem.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-[#2C2420] truncate">
                    {targetItem.name}
                  </p>
                  <p className="text-[11px] text-[#7E716A] truncate">
                    {'flavor' in targetItem && targetItem.flavor ? `Flavor: ${targetItem.flavor}` : ('category' in targetItem ? `Category: ${targetItem.category}` : '')}
                  </p>
                  <span className="text-xs font-medium text-[#B85D43] font-serif">
                    {targetItem.formattedPrice}
                  </span>
                </div>
              </div>
            )}

            {error && (
              <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                {error}
              </p>
            )}

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Radhika"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1">
                  Date Needed
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="radhika@example.com"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1">
                Notes or Custom Request
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special dietary notes or questions..."
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#B85D43] text-white hover:bg-[#98452E] flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
