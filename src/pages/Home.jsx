import React from 'react';
import SvaasaHero from '../components/SvaasaHero';
import EscapeSection from '../components/EscapeSection';
import SvaasaProperties from '../components/SvaasaProperties';
import IntimateMoments from '../components/IntimateMoments';
import Testimonials from '../components/Testimonials';
import SvaasaOffers from '../components/SvaasaOffers';
import HomeGallery from '../components/HomeGallery';
const Home = () => {
  return (
    <div className="w-full relative bg-svaasa-black">
      <SvaasaHero />
      <div className="py-4 md:py-6">
        <hr className="border-white/5 max-w-7xl mx-auto" />
      </div>
      
      <SvaasaProperties />
      <div className="py-4 md:py-6">
        <hr className="border-white/5 max-w-7xl mx-auto" />
      </div>

      <HomeGallery />
      <div className="py-4 md:py-6">
        <hr className="border-white/5 max-w-7xl mx-auto" />
      </div>

      <IntimateMoments />
      <div className="py-4 md:py-6">
        <hr className="border-white/5 max-w-7xl mx-auto" />
      </div>

      <Testimonials />
      <div className="py-4 md:py-6">
        <hr className="border-white/5 max-w-7xl mx-auto" />
      </div>
      
      <SvaasaOffers />
    </div>
  );
};

export default Home;
