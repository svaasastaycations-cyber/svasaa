import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

// Vite glob imports for the gallery images
const oldTownImages = import.meta.glob("../assets/oldtown/*.{jpg,png,jpeg}", {
  eager: true,
});
const lotusBlissImages = import.meta.glob(
  "../assets/lotusbliss/*.{jpg,png,jpeg}",
  { eager: true },
);

// SEO: Mapping for descriptive alt tags for specific images.
// Key is the filename (e.g., 'NVN_6141.jpg'). 
const GALLERY_ALT_TAGS = {
  // The Old Town
  "NVN_6141.jpg": "Heritage entry gate of The Old Town Farm House Hyderabad",
  "NVN_6156.jpg": "Traditional courtyard architecture at Svaasa The Old Town farm house Hyderabad",
  "NVN_6218.jpg": "Luxurious suite interior at The Old Town farm house Hyderabad",

  "NVN_6234.jpg": "Private farm house in Hyderabad with heritage design and open space",
  "NVN_6238.jpg": "Old Town farm house near Hyderabad surrounded by greenery",
  "NVN_6246.jpg": "Best farm house in Hyderabad for weekend staycation and relaxation",
  "NVN_6145.jpg": "Farm house for rent in Hyderabad with traditional architecture",
  "NVN_6148.jpg": "Luxury farmhouse in Hyderabad ideal for peaceful stay",
  "NVN_6150.jpg": "Farm house near Hyderabad perfect for family stay and outings",
  "NVN_6152.jpg": "Farmhouse with natural greenery and open space in Hyderabad",
  "NVN_6163.jpg": "Farm house for one day rent in Hyderabad with spacious rooms",
  "NVN_6168.jpg": "Private farmhouse near Hyderabad for weekend getaway",
  "NVN_6171.jpg": "Best farm house in Hyderabad for group stay and relaxation",
  "NVN_6178.jpg": "Farmhouse Hyderabad with traditional design and outdoor seating",
  "NVN_6179.jpg": "Farm house for rent in Hyderabad with peaceful surroundings",
  "NVN_6182.jpg": "Farmhouse near me Hyderabad with comfortable stay options",
  "NVN_6191.jpg": "Farm house for party in Hyderabad with large open space",
  "NVN_6194.jpg": "Luxury farm stay near Hyderabad with natural ambiance",
  "NVN_6201.jpg": "Weekend farmhouse near Hyderabad for relaxing staycation",
  "NVN_6207.jpg": "Farm house Hyderabad with classic heritage interiors",
  "NVN_6212.jpg": "Private farm house for rent in Hyderabad with greenery",
  "NVN_6221.jpg": "Farm house for events in Hyderabad with spacious layout",
  "NVN_6224.jpg": "Best farmhouse near Hyderabad for peaceful stays",
  "NVN_6232.jpg": "Farm house Hyderabad ideal for family and friends stay",


  // Lotus Bliss
  "DJI_0030-3.jpg": "Aerial view of Lotus Bliss farm house Hyderabad with swimming pool",
  "DJI_0082-4.jpg": "Luxury farmhouse in Hyderabad with pool and garden view",
  "DJI_0095-5.jpg": "Farmhouse with swimming pool for rent in Hyderabad",
  "IMG_1020.jpg": "Plunge pool at Eternal Lotus Bliss farm house Hyderabad",
  "IMG_1022 2.jpg": "Modern living room interior at Lotus Bliss farm house Hyderabad",
  "IMG_1027 2.jpg": "Luxury farmhouse interior in Hyderabad with modern design",
  "KKK_1279-16.jpg": "Private farm house with swimming pool in Hyderabad for rent",
  "KKK_1296-20.jpg": "Best farm house in Hyderabad with swimming pool and greenery",
  "KKK_1298-21.jpg": "Luxury pool villa farmhouse in Hyderabad for weekend stay",
  "KKK_1316-28.jpg": "Farm house for party in Hyderabad with pool and open area",
  "KKK_1319-29.jpg": "Farmhouse Hyderabad perfect for events and celebrations",
  "KKK_1322-30.jpg": "Private farmhouse near Hyderabad with luxury amenities",
  "KKK_1327-31.jpg": "Farm house near Hyderabad for rent with swimming pool",
  "KKK_1333-32.jpg": "Best farmhouse with pool in Hyderabad for staycation",
  "KKK_1337-33.jpg": "Luxury farmhouse Hyderabad for weekend getaway",
  "KKK_1352-37.jpg": "Farm house for rent in Hyderabad under budget with pool",
  "KKK_1356-39.jpg": "Private farm house Hyderabad for group stays and parties",
  "KKK_1254-8.jpg": "Farmhouse near me Hyderabad with pool and garden",
  "KKK_1267-12.jpg": "Luxury farm stay near Hyderabad with modern amenities",
  "KKK_1276-15.jpg": "Farmhouse with swimming pool in Hyderabad for events and stays",
};

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const otList = Object.entries(oldTownImages).map(([path, mod]) => {
      const filename = path.split("/").pop();
      return {
        src: mod.default,
        category: "oldtown",
        title: "Old Town",
        alt: GALLERY_ALT_TAGS[filename] || `The Old Town Farm House Hyderabad`,
      };
    });

    const lbList = Object.entries(lotusBlissImages).map(([path, mod]) => {
      const filename = path.split("/").pop();
      return {
        src: mod.default,
        category: "lotusbliss",
        title: "Lotus Bliss",
        alt: GALLERY_ALT_TAGS[filename] || `Lotus Bliss Farm Stay Hyderabad`,
      };
    });

    setImages([...otList, ...lbList]);
  }, []);

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <Helmet>
        <title>Farm House Gallery Hyderabad | Svaasa Staycations</title>
        <meta
          name="description"
          content="View images of farm houses in Hyderabad with pool, greenery, and event spaces at Svaasa Staycations."
        />
      </Helmet>

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
              A curated visual journey through the heritage of The Old Town and
              the serenity of Eternal Lotus Bliss.
            </motion.p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
            {["all", "oldtown", "lotusbliss"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-3 rounded-full text-xs font-header font-black tracking-[0.2em] transition-all duration-300 border ${filter === f
                  ? "bg-svaasa-brand text-svaasa-black border-svaasa-brand"
                  : "bg-transparent text-white border-white/20 hover:border-white/60"
                  }`}
              >
                {f === "all"
                  ? "All Collections"
                  : f === "oldtown"
                    ? "The Old Town"
                    : "Lotus Bliss"}
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
                    alt={img.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <span className="text-[10px] tracking-widest font-header font-black text-white/70">
                        Collection
                      </span>
                      <h4 className="text-xl font-header font-black">
                        {img.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
