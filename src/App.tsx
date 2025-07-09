import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import BrandsSection from './components/BrandsSection';
import WhyUsSection from './components/WhyUsSection';
import Services from './components/Services';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#281414] text-white">
      <Header />
      <Hero />
      <CaseStudies />
      <BrandsSection />
      <WhyUsSection />
      <Services />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;