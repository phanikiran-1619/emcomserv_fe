import React from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutSection from './AboutSection';
import PhilosophySection from './PhilosophySection';
import ServicesSection from './ServicesSection';
import WhyEmComSection from './WhyEmComSection';
import IndustriesSection from './IndustriesSection';
import CTASection from './CTASection';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <PhilosophySection />
      <ServicesSection />
      <WhyEmComSection />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;