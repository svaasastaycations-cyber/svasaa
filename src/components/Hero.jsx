import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Private Pool Stays",
      subtitle: "You, the pool, and endless green views. No crowd, no noise, just space to breathe!"
    },
    {
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Bespoke Getaways",
      subtitle: "Handcrafted spaces designed for your ultimate comfort and luxury."
    },
    {
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Nature Unplugged",
      subtitle: "Escape the city chaos and reconnect with the serene landscapes of the fargo."
    }
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear scale-100 group-active:scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-5xl md:text-8xl font-serif mb-6 leading-tight"
                  >
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={word === 'Pool' ? 'italic font-script text-fargo-beige' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-fargo-beige/90 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto"
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12"
                  >
                    <button className="px-10 py-4 bg-fargo-brown text-white uppercase tracking-widest text-sm hover:bg-white hover:text-fargo-brown transition-all duration-500 rounded-sm shadow-xl">
                      Experience More
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-white/60 text-[10px] uppercase tracking-[0.4em] mb-4">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
      </div>
    </div>
  );
};

export default Hero;
