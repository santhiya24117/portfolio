import { CustomOrderEnquiry } from '../types';

const STORAGE_KEY = 'crumb_co_custom_enquiries';

// Mock initial enquiries to illustrate database structure & future admin management
const DEFAULT_INITIAL_ENQUIRIES: CustomOrderEnquiry[] = [
  {
    id: 'enq-demo-1',
    customer_name: 'Priyanka Sharma',
    phone: '+91 98450 11223',
    email: 'priyanka.s@example.com',
    event_type: 'Birthday',
    event_date: '2026-09-24',
    guests: '25-30',
    flavor: 'Chocolate',
    size: '1.5 kg',
    budget: '₹2,500 - ₹3,500',
    description: 'Vintage heart cake with chocolate ganache and piped buttercream rosettes.',
    status: 'pending',
    created_at: '2026-09-10T14:30:00.000Z',
  },
  {
    id: 'enq-demo-2',
    customer_name: 'Aditya Rajan',
    phone: '+91 97910 88344',
    email: 'aditya.rajan@example.com',
    event_type: 'Anniversary',
    event_date: '2026-10-02',
    guests: '50',
    flavor: 'Red Velvet',
    size: '3 kg+',
    budget: '₹5,000+',
    description: 'Two-tier rustic textured cake with gold foil accents and fresh eucalyptus.',
    status: 'contacted',
    created_at: '2026-09-08T10:15:00.000Z',
  },
];

export const orderService = {
  /**
   * Retrieves all customer enquiries (mock local storage or future Supabase query)
   */
  async getEnquiries(): Promise<CustomOrderEnquiry[]> {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_INITIAL_ENQUIRIES));
        return DEFAULT_INITIAL_ENQUIRIES;
      }
      return JSON.parse(stored);
    } catch {
      return DEFAULT_INITIAL_ENQUIRIES;
    }
  },

  /**
   * Submits a new custom cake enquiry.
   * Emulates a remote database call with a brief delay and validation.
   */
  async submitEnquiry(
    enquiryData: Omit<CustomOrderEnquiry, 'id' | 'status' | 'created_at'>
  ): Promise<{ success: boolean; enquiryId: string; message: string }> {
    // Artificial slight latency to demonstrate real async UX and loading states
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!enquiryData.customer_name || !enquiryData.phone || !enquiryData.email) {
      throw new Error('Please provide your name, phone number, and email address.');
    }

    const newEnquiry: CustomOrderEnquiry = {
      ...enquiryData,
      id: `enq-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    try {
      const current = await orderService.getEnquiries();
      const updated = [newEnquiry, ...current];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // LocalStorage failure fallback
    }

    return {
      success: true,
      enquiryId: newEnquiry.id,
      message: 'Your cake enquiry has been received.',
    };
  },
};
