import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

// Import images from assets
import mainHero from '../assets/lotusbliss/DJI_0030-3.jpg';
import cricketHero from '../assets/lotusbliss/DJI_0082-4.jpg';
import poolHero from '../assets/herosection/7331DC11-7C9F-4A0F-9E8E-F1511A62347E.png';
import coupleHero from '../assets/herosection/BF744F17-E0BB-4222-A286-BD052BA0B741.png';
import petsHero from '../assets/herosection/dog.png';
import bonfireHero from '../assets/herosection/CBE782FA-75D5-4BEF-8524-12D4480EA8DE.png';

const SvaasaHero = () => {
  const slides = [
    {
      image: mainHero,
      caption: "Hyderabad’s Favourite Staycations",
      subcaption: "Handpicked stays designed for comfort, privacy, and unforgettable moments",
      highlight: "Staycations"
    },
    {
      image: cricketHero,
      caption: "Box Cricket. Snookers. Vibes",
      subcaption: "Play, unwind, and soak in the perfect blend of fun and relaxation",
      highlight: "Vibes"
    },
    {
      image: poolHero,
      caption: "Dive into Paradise",
      subcaption: "Refresh, relax, and indulge in your own private poolside escape",
      highlight: "Paradise"
    },
    {
      image: coupleHero,
      caption: "Couple-Crafted Luxury Stays",
      subcaption: "Intimate spaces thoughtfully designed for meaningful moments together",
      highlight: "Luxury Stays"
    },
    {
      image: petsHero,
      caption: "Get Your Pets Along",
      subcaption: "Because your perfect getaway isn’t complete without them",
      highlight: "Pets Along"
    },
    {
      image: bonfireHero,
      caption: "Cozy by the Bonfire",
      subcaption: "Warm nights, good conversations, and memories that linger longer",
      highlight: "Bonfire"
    }
  ];

  const renderCaption = (caption, highlight) => {
    if (!highlight) return caption;
    const parts = caption.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ?
        <span key={i} className="text-svaasa-brand italic">{part}</span> :
        part
    );
  };

  return (
    <section className="relative h-screen w-full group overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        speed={1500}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="w-full h-full relative">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 mt-16 md:mt-24">
              <h2 className="text-4xl md:text-7xl lg:text-9xl font-header font-black text-white max-w-sm md:max-w-6xl leading-tight md:leading-[1.1] drop-shadow-2xl">
                {renderCaption(slide.caption, slide.highlight)}
              </h2>
              <p className="mt-8 text-base md:text-2xl font-header font-bold tracking-wide text-white/90 max-w-4xl mx-auto italic drop-shadow-lg">
                {slide.subcaption}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button className="swiper-button-prev-custom absolute top-[85%] md:top-1/2 left-4 md:left-12 z-30 -translate-y-1/2 w-10 h-10 md:w-20 md:h-20 md:bg-white/10 md:hover:bg-white text-white/50 hover:text-white md:hover:text-black rounded-full flex items-center justify-center transition-all duration-500 md:backdrop-blur-md md:border md:border-white/10 group-hover:opacity-100 opacity-100">
        <ChevronLeft size={32} className="md:w-12 md:h-12" strokeWidth={1} />
      </button>
      <button className="swiper-button-next-custom absolute top-[85%] md:top-1/2 right-4 md:right-12 z-30 -translate-y-1/2 w-10 h-10 md:w-20 md:h-20 md:bg-white/10 md:hover:bg-white text-white/50 hover:text-white md:hover:text-black rounded-full flex items-center justify-center transition-all duration-500 md:backdrop-blur-md md:border md:border-white/10 group-hover:opacity-100 opacity-100">
        <ChevronRight size={32} className="md:w-12 md:h-12" strokeWidth={1} />
      </button>


      {/* Custom Slide Indicators Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-white/30" />
        ))}
      </div>
    </section>
  );
};

export default SvaasaHero;
