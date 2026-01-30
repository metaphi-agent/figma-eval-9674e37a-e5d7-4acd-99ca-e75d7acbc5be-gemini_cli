import React from 'react';
import { Header } from '../components/blocks/Header';
import { HeroSection } from '../components/blocks/HeroSection';
import { FeatureSection } from '../components/blocks/FeatureSection';
import { AppShowcaseSection } from '../components/blocks/AppShowcaseSection';
import { TestimonialSection } from '../components/blocks/TestimonialSection';
import { ContentSection } from '../components/blocks/ContentSection';
import { MacbookSection } from '../components/blocks/MacbookSection';
import { Footer } from '../components/blocks/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-blue-gray-900 overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <AppShowcaseSection />
        <TestimonialSection />
        <ContentSection />
        <MacbookSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
