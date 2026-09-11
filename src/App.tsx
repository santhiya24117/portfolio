import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { CakesPage } from './pages/CakesPage';
import { CustomOrdersPage } from './pages/CustomOrdersPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { QuickEnquiryModal } from './components/QuickEnquiryModal';

// Automatically scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, search]);

  return null;
};

export default function App() {
  const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2420] antialiased selection:bg-[#F5EFEB] selection:text-[#B85D43]">
        <Navbar onOpenEnquiry={() => setIsQuickEnquiryOpen(true)} />
        
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cakes" element={<CakesPage />} />
            <Route path="/custom-orders" element={<CustomOrdersPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Quick Enquiry Modal */}
        <QuickEnquiryModal
          isOpen={isQuickEnquiryOpen}
          onClose={() => setIsQuickEnquiryOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
