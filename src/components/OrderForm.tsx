import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Users, 
  Cake as CakeIcon, 
  Phone, 
  Mail, 
  User, 
  X,
  FileImage,
  Loader2
} from 'lucide-react';
import { orderService } from '../services/orderService';
import { CustomOrderEnquiry } from '../types';

export const OrderForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledCake = searchParams.get('cake') || searchParams.get('item') || '';
  const prefilledFlavor = searchParams.get('flavor') || '';

  // Form state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState<CustomOrderEnquiry['event_type']>('Birthday');
  const [eventDate, setEventDate] = useState('');
  const [guests, setGuests] = useState('15-20');
  const [flavor, setFlavor] = useState<CustomOrderEnquiry['flavor']>(
    prefilledFlavor.includes('Chocolate') ? 'Chocolate' :
    prefilledFlavor.includes('Vanilla') ? 'Vanilla' :
    prefilledFlavor.includes('Red Velvet') ? 'Red Velvet' :
    prefilledFlavor.includes('Strawberry') ? 'Strawberry' : 'Custom'
  );
  const [size, setSize] = useState<CustomOrderEnquiry['size']>('1.5 kg');
  const [budget, setBudget] = useState('₹2,000 - ₹3,500');
  const [description, setDescription] = useState(
    prefilledCake ? `Inquiring regarding ${prefilledCake}. We would love something in that style.` : ''
  );

  // File upload state
  const [referenceFile, setReferenceFile] = useState<{ name: string; url: string; size: string } | null>(null);
  const [dragActive, setDragActive] = useState(false);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    enquiryId: string;
    message: string;
  } | null>(null);

  // Validate form
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (phone.length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!eventDate) {
      errs.eventDate = 'Please select your intended event or pickup date';
    }
    return errs;
  };

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({ ...prev, file: 'Please upload an image file (JPEG, PNG, WebP)' }));
      return;
    }
    const fileSizeFormatted = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;
    const reader = new FileReader();
    reader.onload = (e) => {
      setReferenceFile({
        name: file.name,
        url: e.target?.result as string,
        size: fileSizeFormatted,
      });
      setErrors((prev) => {
        const next = { ...prev };
        delete next.file;
        return next;
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await orderService.submitEnquiry({
        customer_name: fullName,
        phone,
        email,
        event_type: eventType,
        event_date: eventDate,
        guests,
        flavor,
        size,
        budget,
        description,
        reference_image: referenceFile?.url,
      });
      setSubmissionResult(res);
    } catch (err: any) {
      setErrors({ form: err.message || 'Something went wrong while submitting. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setDescription('');
    setReferenceFile(null);
    setSubmissionResult(null);
    setErrors({});
  };

  if (submissionResult?.success) {
    return (
      <div className="bg-white rounded-3xl border border-[#EBE1D7] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-xs">
        <div className="w-16 h-16 bg-[#F5EFEB] rounded-full flex items-center justify-center mx-auto mb-6 text-[#B85D43]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-[#B85D43] font-semibold">
          Enquiry Ref: #{submissionResult.enquiryId}
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2420] mt-2 mb-4 font-normal">
          {submissionResult.message}
        </h3>
        <p className="text-base sm:text-lg text-[#7E716A] max-w-md mx-auto leading-relaxed mb-6 font-normal">
          Thank you! We'll review your requirements and get back to you within 24 hours to confirm availability and discuss fine details.
        </p>

        <div className="bg-[#FAF8F5] rounded-2xl p-5 mb-8 text-left border border-[#EBE1D7] text-sm text-[#4A3E39] space-y-2">
          <div className="flex justify-between">
            <span className="text-[#7E716A]">Client:</span>
            <span className="font-medium text-[#2C2420]">{fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#7E716A]">Event:</span>
            <span className="font-medium text-[#2C2420]">{eventType} on {eventDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#7E716A]">Flavor &amp; Size:</span>
            <span className="font-medium text-[#2C2420]">{flavor} • {size}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#2C2420] text-white hover:bg-[#4A3E39] transition-colors"
          >
            Submit Another Cake Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="custom-cake-enquiry-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl border border-[#EBE1D7] p-6 sm:p-10 shadow-xs max-w-3xl mx-auto space-y-8"
    >
      {errors.form && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
          <span>{errors.form}</span>
        </div>
      )}

      {/* Contact Details */}
      <div>
        <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2C2420] pb-2 border-b border-[#F5EFEB] mb-5">
          1. Your Contact Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="form-full-name" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
              Full Name <span className="text-[#B85D43]">*</span>
            </label>
            <div className="relative">
              <input
                id="form-full-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43] transition-all ${
                  errors.fullName ? 'border-red-400' : 'border-[#EBE1D7]'
                }`}
              />
              <User className="absolute right-3.5 top-3.5 w-4 h-4 text-[#7E716A]" />
            </div>
            {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="form-phone" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
              Phone Number <span className="text-[#B85D43]">*</span>
            </label>
            <div className="relative">
              <input
                id="form-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43] transition-all ${
                  errors.phone ? 'border-red-400' : 'border-[#EBE1D7]'
                }`}
              />
              <Phone className="absolute right-3.5 top-3.5 w-4 h-4 text-[#7E716A]" />
            </div>
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="form-email" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
              Email Address <span className="text-[#B85D43]">*</span>
            </label>
            <div className="relative">
              <input
                id="form-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. priya@example.com"
                className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43] transition-all ${
                  errors.email ? 'border-red-400' : 'border-[#EBE1D7]'
                }`}
              />
              <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-[#7E716A]" />
            </div>
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div>
        <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2C2420] pb-2 border-b border-[#F5EFEB] mb-5">
          2. The Celebration
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <label htmlFor="form-event-type" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
              Event Type
            </label>
            <select
              id="form-event-type"
              value={eventType}
              onChange={(e) => setEventType(e.target.value as CustomOrderEnquiry['event_type'])}
              className="w-full px-4 py-3 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
            >
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Corporate">Corporate Event</option>
              <option value="Other">Other Celebration</option>
            </select>
          </div>

          <div>
            <label htmlFor="form-event-date" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
              Event / Delivery Date <span className="text-[#B85D43]">*</span>
            </label>
            <div className="relative">
              <input
                id="form-event-date"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43] ${
                  errors.eventDate ? 'border-red-400' : 'border-[#EBE1D7]'
                }`}
              />
            </div>
            {errors.eventDate && <p className="text-xs text-red-600 mt-1">{errors.eventDate}</p>}
          </div>

          <div>
            <label htmlFor="form-guests" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
              Number of Guests
            </label>
            <div className="relative">
              <input
                id="form-guests"
                type="text"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="e.g. 20-25 guests"
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
              />
              <Users className="absolute right-3.5 top-3.5 w-4 h-4 text-[#7E716A]" />
            </div>
          </div>
        </div>
      </div>

      {/* Cake Specifications */}
      <div>
        <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2C2420] pb-2 border-b border-[#F5EFEB] mb-5">
          3. Cake Preferences
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <label htmlFor="form-flavor" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
              Cake Flavor
            </label>
            <select
              id="form-flavor"
              value={flavor}
              onChange={(e) => setFlavor(e.target.value as CustomOrderEnquiry['flavor'])}
              className="w-full px-4 py-3 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
            >
              <option value="Chocolate">Chocolate</option>
              <option value="Vanilla">Vanilla</option>
              <option value="Red Velvet">Red Velvet</option>
              <option value="Strawberry">Strawberry</option>
              <option value="Butterscotch">Butterscotch</option>
              <option value="Custom">Custom / Combination</option>
            </select>
          </div>

          <div>
            <label htmlFor="form-size" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
              Estimated Cake Size
            </label>
            <select
              id="form-size"
              value={size}
              onChange={(e) => setSize(e.target.value as CustomOrderEnquiry['size'])}
              className="w-full px-4 py-3 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
            >
              <option value="0.5 kg">0.5 kg (4-6 servings)</option>
              <option value="1 kg">1 kg (8-10 servings)</option>
              <option value="1.5 kg">1.5 kg (12-16 servings)</option>
              <option value="2 kg">2 kg (18-22 servings)</option>
              <option value="3 kg+">3 kg+ / Multi-tier (25+ servings)</option>
              <option value="Not Sure">Not Sure (Advise me)</option>
            </select>
          </div>

          <div>
            <label htmlFor="form-budget" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
              Preferred Budget
            </label>
            <input
              id="form-budget"
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g. ₹2,000 – ₹3,500"
              className="w-full px-4 py-3 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43]"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="form-description" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E39] mb-1.5">
              Design Description &amp; Inspiration
            </label>
            <textarea
              id="form-description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your theme, color palette, message on cake, or any aesthetic preferences..."
              className="w-full px-4 py-3 text-sm rounded-xl border border-[#EBE1D7] bg-[#FAF8F5] focus:bg-white text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#B85D43] leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* Reference Image Upload */}
      <div>
        <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2C2420] pb-2 border-b border-[#F5EFEB] mb-4">
          4. Reference Image (Optional)
        </h3>
        
        {referenceFile ? (
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBE1D7]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#F5EFEB] shrink-0 border border-[#EBE1D7]">
                <img src={referenceFile.url} alt="Reference Preview" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-[#2C2420] truncate max-w-xs">{referenceFile.name}</p>
                <p className="text-xs text-[#7E716A]">{referenceFile.size}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setReferenceFile(null)}
              className="p-1.5 rounded-full hover:bg-white text-[#7E716A] hover:text-[#B85D43]"
              aria-label="Remove image"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div
            onDragEnter={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={(e) => { e.preventDefault(); setDragActive(false); }}
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center transition-all cursor-pointer ${
              dragActive ? 'border-[#B85D43] bg-[#F7EFEF]' : 'border-[#EBE1D7] hover:border-[#D9CBC2] bg-[#FAF8F5]'
            }`}
          >
            <input
              id="file-upload-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileUpload(e.target.files[0]);
                }
              }}
            />
            <label htmlFor="file-upload-input" className="cursor-pointer block">
              <UploadCloud className="w-10 h-10 text-[#B85D43] mx-auto mb-2" />
              <p className="text-sm font-medium text-[#2C2420]">
                Click to upload or drag &amp; drop a cake reference
              </p>
              <p className="text-xs text-[#7E716A] mt-1">
                PNG, JPG, WebP up to 10MB
              </p>
            </label>
          </div>
        )}
        {errors.file && <p className="text-xs text-red-600 mt-2">{errors.file}</p>}
      </div>

      {/* Submit Button & Disclaimer */}
      <div className="pt-4 border-t border-[#F5EFEB] flex flex-col items-center text-center space-y-3">
        <button
          type="submit"
          id="submit-enquiry-button"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[280px] px-8 py-4 rounded-full text-sm uppercase tracking-widest font-semibold bg-[#B85D43] text-white hover:bg-[#98452E] shadow-sm hover:shadow active:scale-[0.99] transition-all disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <span>Submit Cake Enquiry</span>
          )}
        </button>

        <p className="text-xs text-[#7E716A] max-w-md leading-normal">
          * This is an enquiry request, not an automatic payment or confirmation. Our baker will contact you to finalize the design, pricing, and timing.
        </p>
      </div>
    </form>
  );
};
