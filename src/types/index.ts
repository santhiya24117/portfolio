export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  openingHours: {
    monSat: string;
    sunday: string;
  };
  socials: {
    instagram: string;
    facebook: string;
    pinterest: string;
  };
  isPortfolioDemo: boolean;
}

export type ProductCategory = 
  | 'cakes' 
  | 'pastries' 
  | 'breads' 
  | 'cookies' 
  | 'desserts' 
  | 'beverages';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
  itemCount?: number;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  formattedPrice: string;
  image: string;
  isBestseller?: boolean;
  tags?: string[];
}

export type CakeCategory = 
  | 'signature' 
  | 'celebration' 
  | 'minimal' 
  | 'chocolate' 
  | 'custom';

export interface CakeItem {
  id: string;
  name: string;
  flavor: string;
  category: CakeCategory;
  description: string;
  availableSizes: string[];
  startingPrice: number;
  formattedPrice: string;
  image: string;
  featured?: boolean;
}

export type CustomOrderStatus = 
  | 'pending' 
  | 'contacted' 
  | 'confirmed' 
  | 'completed' 
  | 'cancelled';

export interface CustomOrderEnquiry {
  id: string;
  customer_name: string;
  phone: string;
  email: string;
  event_type: 'Birthday' | 'Wedding' | 'Anniversary' | 'Baby Shower' | 'Corporate' | 'Other';
  event_date: string;
  guests: string;
  flavor: 'Chocolate' | 'Vanilla' | 'Red Velvet' | 'Strawberry' | 'Butterscotch' | 'Custom';
  size: '0.5 kg' | '1 kg' | '1.5 kg' | '2 kg' | '3 kg+' | 'Not Sure';
  budget: string;
  description: string;
  reference_image?: string;
  status: CustomOrderStatus;
  created_at: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  review: string;
  productPurchased: string;
  avatar?: string;
  orderImage?: string;
  location?: string;
  date?: string;
}

export type GalleryCategory = 
  | 'all' 
  | 'cakes' 
  | 'pastries' 
  | 'bread' 
  | 'desserts' 
  | 'behind-the-scenes';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cakes' | 'pastries' | 'bread' | 'desserts' | 'behind-the-scenes';
  categoryLabel: string;
  image: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
}
