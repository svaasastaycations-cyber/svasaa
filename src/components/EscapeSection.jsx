import React from 'react';

const EscapeSection = () => {
  return (
    <section className="py-24 bg-svaasa-black text-center border-b border-white/5">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl md:text-5xl lg:text-7xl font-header font-black text-white mb-6 tracking-tight">
          Escape the city. <br className="hidden md:block text-svaasa-brand"/> Experience <span className="text-svaasa-brand italic">Svaasa.</span>
        </h3>
        <div className="inline-block bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-sm">
          <p className="text-base md:text-xl text-svaasa-gray font-header font-medium max-w-2xl mx-auto tracking-wide">
            Designed for Peace, Perfect for Celebrations, Built for Memories
          </p>
        </div>
      </div>
    </section>
  );
};

export default EscapeSection;
