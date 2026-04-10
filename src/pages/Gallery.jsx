import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Vite glob imports for the gallery images
const oldTownImages = import.meta.glob("../assets/oldtown/*.{jpg,png,jpeg}", { eager: true });
const lotusBlissImages = import.meta.glob("../assets/lotusbliss/*.{jpg,png,jpeg}", { eager: true });

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const otList = Object.values(oldTownImages).map((mod) => ({
      src: mod.default,
      category: "oldtown",
      title: "Old Town",
    }));

    const lbList = Object.values(lotusBlissImages).map((mod) => ({
      src: mod.default,
      category: "lotusbliss",
      title: "Lotus Bliss",
    }));

    setImages([...otList, ...lbList]);
  }, []);

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-svaasa-black">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-header font-black text-white mb-6 tracking-tighter"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-svaasa-gray text-lg font-sans leading-relaxed"
          >
            A curated visual journey through the heritage of The Old Town and the 
            serenity of Eternal Lotus Bliss.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
          {["all", "oldtown", "lotusbliss"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 rounded-full text-xs font-header font-black tracking-[0.2em] transition-all duration-300 border ${
                filter === f
                  ? "bg-svaasa-brand text-svaasa-black border-svaasa-brand"
                  : "bg-transparent text-white border-white/20 hover:border-white/60"
              }`}
            >
              {f === "all" ? "All Collections" : f === "oldtown" ? "The Old Town" : "Lotus Bliss"}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group overflow-hidden rounded-2xl cursor-zoom-in"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[10px] tracking-widest font-header font-black text-white/70">
                      Collection
                    </span>
                    <h4 className="text-xl font-header font-black">{img.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
