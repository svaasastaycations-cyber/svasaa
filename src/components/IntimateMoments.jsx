import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import weddingImg from '../assets/wedding.png';
import birthdayImg from '../assets/birthday.png';
import haldiImg from '../assets/haldi.png';

const IntimateMoments = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: "Weddings",
      image: weddingImg
    },
    {
      title: "Birthdays",
      image: birthdayImg
    },
    {
      title: "Haldi & Mehendi",
      image: haldiImg
    }
  ];

  return (
    <section className="py-12 bg-svaasa-black border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-header font-black tracking-wider text-svaasa-brand mb-6 leading-tight">
            More Than a Staycation, <br/>
            <span className="text-white block mt-4 italic-none not-italic">Celebrate Life’s Best Moments</span> 
          </h3>
          <p className="text-lg md:text-xl text-svaasa-gray font-header font-light tracking-wide">
             Surrounded by Nature, Crafted for Memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer" onClick={() => navigate('/events')}>
          {events.map((event, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl shadow-xl">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-white/10 transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-between">
                <h3 className="font-header font-black text-2xl tracking-widest text-white transform group-hover:-translate-y-2 transition-transform duration-300">
                  {event.title}
                </h3>
                <div className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 backdrop-blur-md">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button 
            onClick={() => navigate('/events')}
            className="px-8 py-4 bg-svaasa-brand text-svaasa-black tracking-widest text-sm font-black rounded-full hover:bg-white transition-colors shadow-lg"
          >
            Explore Event Spaces
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntimateMoments;
