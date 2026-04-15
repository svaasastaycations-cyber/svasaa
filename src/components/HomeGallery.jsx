import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Note: In a real Vite project, we might use a dynamic import or glob pattern
// but for this preview, we'll manually import a few representive images.
import ot1 from "../assets/oldtown/NVN_6141.jpg";
import ot2 from "../assets/oldtown/NVN_6145.jpg";
import ot3 from "../assets/oldtown/NVN_6148.jpg";
import lb1 from "../assets/lotusbliss/DJI_0030-3.jpg";
import lb2 from "../assets/lotusbliss/DJI_0082-4.jpg";
import lb3 from "../assets/lotusbliss/DJI_0095-5.jpg";

const HomeGallery = () => {
  const images = [
    { src: lb1, alt: "Svaasa Lotus Bliss", altTag: "Farm House for One Day Rent in Hyderabad", title: "Lotus Bliss" },
    { src: ot2, alt: "Svaasa Old Town Interior", altTag: "Near Me Farmhouse", title: "Interiors" },
    { src: lb2, alt: "Svaasa Lotus Bliss Exterior", altTag: "Farmhouse Greens", title: "Poolside" },
    { src: ot3, alt: "Svaasa Old Town Garden", altTag: "Farm House Near Hyderabad", title: "Gardens" },
    { src: lb3, alt: "Svaasa Lotus Bliss Sunset", altTag: "Farm House For Rent in Hyderabad", title: "Sunset Views" },
  ];

  const scrollContainerRef = React.useRef(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-svaasa-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 gap-8 text-center">
          <div>
            <h2 className="text-sm tracking-[0.4em] font-header font-black text-svaasa-gray mb-4 uppercase">
              Visual Showcase
            </h2>
            <h3 className="text-4xl md:text-6xl font-header font-black text-svaasa-brand tracking-tight">
              Experience the Soul of Svaasa
            </h3>
          </div>
          <Link
            to="/gallery"
            className="group flex items-center space-x-3 text-white/60 border-b border-white/10 pb-2 hover:border-white hover:text-white transition-all duration-300"
          >
            <span className="text-sm font-header font-black tracking-widest uppercase">
              View All Photos
            </span>
            <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        <div className="relative group/gallery">
          {/* Navigation Arrows (Desktop Hover) */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 md:group-hover/gallery:opacity-100 transition-all hover:bg-svaasa-brand hover:text-black hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 md:group-hover/gallery:opacity-100 transition-all hover:bg-svaasa-brand hover:text-black hover:scale-110 active:scale-95"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-scroll pb-4 gap-6 scrollbar-hide snap-x snap-mandatory"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[85vw] md:min-w-[400px] group relative aspect-[4/5] overflow-hidden rounded-3xl cursor-crosshair snap-center shadow-2xl border border-white/5"
              >
                <img
                  src={img.src}
                  alt={img.altTag}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[10px] tracking-widest text-white/60 mb-2 font-header font-black">
                    {img.title}
                  </span>
                  <h4 className="text-xl font-header font-black text-white mb-4">
                    {img.alt}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Bottom Navigation Arrows & Progress Bar */}
          <div className="mt-2 flex items-center justify-between max-w-[300px] mx-auto px-4">
            <button
              onClick={() => scroll('left')}
              className="p-2 text-white/40 hover:text-svaasa-brand transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex-1 mx-6 h-[3px] bg-white/30 relative rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-svaasa-brand transition-all duration-300 ease-out"
                style={{ width: `${100 / images.length}%`, left: `${(scrollProgress * (1 - 1 / images.length))}%` }}
              />
            </div>

            <button
              onClick={() => scroll('right')}
              className="p-2 text-white/40 hover:text-svaasa-brand transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeGallery;
