import React from 'react';
import { Tag, Sparkles, Map } from 'lucide-react';

const SvaasaOffers = () => {
  const offers = [
    {
      title: "Early Bird Special",
      desc: "Book 30 days in advance and get 20% off your entire stay.",
      code: "EARLYBIRD20",
      icon: <Sparkles size={24} />
    },
    {
      title: "Long Weekend Escape",
      desc: "Stay for 3 nights, pay for 2. Unwind completely at our farmstays.",
      code: "SVAASA3FOR2",
      icon: <Map size={24} />
    }
  ];

  return (
    <section className="py-12 bg-svaasa-black text-white text-center border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-sm tracking-widest font-header font-black text-svaasa-gray mb-4">
          Exclusive for you
        </h2>
        <h3 className="text-4xl md:text-5xl font-header font-black tracking-wider mb-16 text-svaasa-brand">
          Svaasa Offers
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {offers.map((offer, idx) => (
            <div key={idx} className="border border-white/10 p-10 hover:border-white transition-colors duration-500 rounded-3xl flex flex-col items-center group bg-svaasa-card shadow-lg hover:shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-svaasa-black mb-6 group-hover:scale-110 transition-transform">
                {offer.icon}
              </div>
              <h4 className="font-header font-black tracking-wide text-2xl mb-4 text-white">
                {offer.title}
              </h4>
              <p className="text-white/60 font-medium mb-8 flex-grow">
                {offer.desc}
              </p>
              <div className="inline-block border border-dashed border-white/50 px-6 py-2 rounded-full text-white text-sm tracking-widest font-mono bg-white/5">
                {offer.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SvaasaOffers;
