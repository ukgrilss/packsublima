import React from 'react';
import Banner from './components/Banner';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen font-sans selection:bg-gold-500 selection:text-black">
      <Banner />
      <Hero3D />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
};

export default App;
