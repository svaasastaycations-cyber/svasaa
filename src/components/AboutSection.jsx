import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-24 bg-fargo-beige flex flex-col items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm uppercase tracking-[0.4em] font-sans text-fargo-brown mb-4">
                Our Promise
              </h2>
              <h3 className="text-4xl md:text-6xl font-serif text-fargo-dark mb-8 leading-tight">
                More than just a <span className="font-script italic">Staycation!</span>
              </h3>
              <p className="text-lg text-fargo-dark/70 font-light leading-relaxed mb-8">
                Fargo was born out of a passion for bespoke, themed spaces and personalized hospitality. 
                Whether it's a romantic getaway, a family reunion, or a creative retreat, 
                our getaways are designed to inspire and rejuvenate.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="p-6 border border-fargo-brown/10 hover:border-fargo-brown/30 transition-colors">
                  <div className="text-fargo-brown mb-4">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-xl mb-2">Unique Spaces</h4>
                  <p className="text-sm text-fargo-dark/60">Architecturally curated homes with distinctive character.</p>
                </div>
                <div className="p-6 border border-fargo-brown/10 hover:border-fargo-brown/30 transition-colors">
                  <div className="text-fargo-brown mb-4">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-xl mb-2">Curated Luxury</h4>
                  <p className="text-sm text-fargo-dark/60">Premium amenities and personalized steward service for every stay.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Fargo property interior" 
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%] hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
            </motion.div>
            
            {/* Retro Phone Illustration Placeholder */}
            <div className="absolute -bottom-10 -right-10 hidden lg:block w-48 opacity-20">
               <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M20,60 C20,30 80,30 80,60 L80,80 L20,80 Z" />
                  <circle cx="50" cy="55" r="15" />
                  <path d="M40,25 Q50,15 60,25" strokeWidth="1" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
