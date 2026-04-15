import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Home, PartyPopper, Users, Bed } from 'lucide-react';

// Import images from assets
import oldTownImg from '../assets/oldtown.jpg';
import lotusBlissImg from '../assets/lotus.jpg';

const SvaasaProperties = () => {
  const navigate = useNavigate();

  const properties = [
    {
      id: "old-town",
      name: "The Old Town",
      alt: "Best Farm House in Hyderabad With Swimming Pool",
      image: oldTownImg,
      lines: [
        { icon: <MapPin size={18} />, text: "Just 25 mins from ORR" },
        { icon: <Bed size={18} />, text: "6 Unique Boho themed luxury rooms" },
        { icon: <Users size={18} />, text: "Can accommodate upto 30 guests" }
      ],
      link: "/farmstays/old-town"
    },
    {
      id: "lotus-bliss",
      name: "The Lotus Bliss",
      alt: "Green Meadows Farm House Hyderabad",
      image: lotusBlissImg,
      lines: [
        { icon: <MapPin size={18} />, text: "Just 15 mins from ORR" },
        { icon: <Bed size={18} />, text: "4 European Themed Luxury Rooms" },
        { icon: <Users size={18} />, text: "Upto 20 guests" }
      ],
      link: "/farmstays/lotus-bliss"
    }
  ];

  return (
    <section className="py-12 bg-svaasa-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-header font-black tracking-wider text-svaasa-brand mb-6 leading-tight">
            Signature Farmstays
          </h1>
          <p className="text-lg md:text-xl text-svaasa-gray font-header font-light tracking-wide">
            Curated by Nature, Crafted for Comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {properties.map((prop) => (
            <div
              key={prop.id}
              className="group cursor-pointer bg-svaasa-card overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl border border-white/5 flex flex-col"
              onClick={() => navigate(prop.link)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-svaasa-black transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight size={20} />
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h4 className="text-3xl font-header font-black text-svaasa-white mb-6 tracking-wide">
                  {prop.name}
                </h4>
                <div className="space-y-4 text-svaasa-gray">
                  {prop.lines.map((line, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <span className="text-white bg-white/10 p-2 rounded-full border border-white/5">{line.icon}</span>
                      <span className="text-lg font-light">{line.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 tracking-widest text-sm font-black text-white/50 flex items-center group-hover:text-white transition-colors">
                  Explore Farmstay
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SvaasaProperties;
