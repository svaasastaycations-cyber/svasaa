import React from 'react';
import { motion } from 'framer-motion';

const VisualShowcase = () => {
  const categories = [
    { title: 'Weddings', count: '12+', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Picnics', count: '45+', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Pet Friendly', count: '100%', image: 'https://images.unsplash.com/photo-1541364983171-a8ba01d95cfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Kids Getaway', count: 'Eco-friendly', image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <section className="py-24 bg-fargo-beige">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] font-sans text-fargo-brown mb-4">
          Visual Showcase
        </h2>
        <h3 className="text-4xl md:text-5xl font-serif text-fargo-dark">
          Curated <span className="font-script italic text-fargo-brown">Experiences</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"
              style={{ backgroundImage: `url(${cat.image})` }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-end p-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[10px] uppercase tracking-widest opacity-70 mb-2">{cat.count}</span>
              <h4 className="text-2xl font-serif mb-2">{cat.title}</h4>
              <div className="w-10 h-[1px] bg-white group-hover:w-20 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VisualShowcase;
