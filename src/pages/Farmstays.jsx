import React from 'react';
import SvaasaProperties from '../components/SvaasaProperties';

const Farmstays = () => {
  return (
    <div className="pt-32 pb-24 bg-svaasa-black min-h-screen">
      <div className="container mx-auto px-6 text-center max-w-4xl mb-16">
        <h1 className="text-sm tracking-[0.4em] font-header font-black text-white/50 mb-6">
          Svaasa Staycations
        </h1>
        <h2 className="text-4xl md:text-6xl font-header font-black text-white tracking-widest leading-tight">
          Our Handcrafted <span className="italic text-svaasa-brand">Farmstays</span>
        </h2>
        <p className="mt-8 text-svaasa-gray text-lg md:text-xl leading-relaxed font-header font-medium italic">
          Discover properties designed for peace, perfect for celebrations, and built for memories. Choose your next escape below.
        </p>
      </div>
      <SvaasaProperties />
    </div>
  );
};

export default Farmstays;
