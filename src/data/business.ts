import { BusinessInfo } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'CRUMB & CO.',
  tagline: 'Baked Fresh. Made With Love.',
  phone: '+91 98765 43210',
  email: 'hello@crumbandco.example',
  address: {
    street: "24 Baker's Lane",
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    postalCode: '641001',
    country: 'India',
  },
  openingHours: {
    monSat: '8:00 AM – 9:00 PM',
    sunday: '9:00 AM – 8:00 PM',
  },
  socials: {
    instagram: 'https://instagram.com/crumbandco.bakery',
    facebook: 'https://facebook.com/crumbandco.bakery',
    pinterest: 'https://pinterest.com/crumbandco.bakery',
  },
  isPortfolioDemo: true,
};
