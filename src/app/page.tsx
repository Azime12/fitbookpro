'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import HeroSection from '@/components/homepage/HeroSection';
import VideoSection from '@/components/homepage/VideoSection';
import PricingSection from '@/components/homepage/PricingSection';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';
import FAQSection from '@/components/homepage/FAQSection';
import PartnersSection from '@/components/homepage/PartnersSection';
import Footer from '@/components/homepage/Footer';

export default function HomePage() {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <HeroSection />
      <VideoSection />
      <PricingSection isYearly={isYearly} setIsYearly={setIsYearly} />
      <TestimonialsSection />
      <FAQSection openItems={openItems} toggleItem={toggleItem} />
      <PartnersSection />
      <Footer />
    </div>
  );
}