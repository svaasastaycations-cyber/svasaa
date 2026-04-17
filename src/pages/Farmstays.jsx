import React, { useState } from "react";
import SvaasaProperties from "../components/SvaasaProperties";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

// Old Town images
import ot1 from "../assets/oldtown/NVN_6301.jpeg";
import ot2 from "../assets/oldtown/NVN_6541.jpeg";
import ot3 from "../assets/oldtown/26DF0AB6-ED9C-436F-BB53-343EDD3E4A9B.png";
import ot4 from "../assets/oldtown/2BC115F2-B6B3-4AB7-895B-E5E3A084A239.png";
import ot5 from "../assets/oldtown/2D1AAF70-42AB-41D7-965F-04AB253313AA.png";

// Lotus Bliss images
import lb1 from "../assets/lotusbliss/DJI_0030-3.jpg";
import lb2 from "../assets/lotusbliss/KKK_1298-21.jpg";
import lb3 from "../assets/lotusbliss/KKK_1316-28.jpg";
import lb4 from "../assets/lotusbliss/KKK_1384-44.jpg";
import lb5 from "../assets/lotusbliss/KKK_1453-56 (1).jpg";

const galleryItems = [
  { src: ot1, category: "oldtown", label: "The Old Town" },
  { src: lb1, category: "lotusbliss", label: "Lotus Bliss" },
  { src: ot2, category: "oldtown", label: "The Old Town" },
  { src: lb2, category: "lotusbliss", label: "Lotus Bliss" },
  { src: ot3, category: "oldtown", label: "The Old Town" },
  { src: lb3, category: "lotusbliss", label: "Lotus Bliss" },
  { src: ot4, category: "oldtown", label: "The Old Town" },
  { src: lb4, category: "lotusbliss", label: "Lotus Bliss" },
  { src: ot5, category: "oldtown", label: "The Old Town" },
  { src: lb5, category: "lotusbliss", label: "Lotus Bliss" },
];

const Farmstays = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((img) => img.category === filter);

  return (
    <>
      <Helmet>
        <title>Farm Houses Near Hyderabad for Rent | Svaasa Staycations</title>
        <meta
          name="description"
          content="Explore farm houses near Hyderabad with private pool and greenery. Ideal for weekend stays, group outings, and peaceful staycations."
        />
        <meta
          name="keywords"
          content="farm house near hyderabad, farmhouse near me, nearby farmhouse hyderabad, weekend farmhouse hyderabad"
        />
      </Helmet>

      <div className="pt-32 pb-24 bg-svaasa-black min-h-screen">
        {/* Page Header */}
        <div className="container mx-auto px-6 text-center max-w-4xl mb-16">
          <h1 className="text-sm tracking-[0.4em] font-header font-black text-white/50 mb-6">
            Svaasa Staycations
          </h1>
          <h2 className="text-4xl md:text-6xl font-header font-black text-white tracking-widest leading-tight">
            Our Handcrafted{" "}
            <span className="italic text-svaasa-brand">Farmstays</span>
          </h2>
          <p className="mt-8 text-svaasa-gray text-lg md:text-xl leading-relaxed font-header font-medium italic">
            Discover properties designed for peace, perfect for celebrations,
            and built for memories. Choose your next escape below.
          </p>
        </div>

        {/* Properties Cards */}
        <SvaasaProperties />

        {/* Gallery Section */}
        <section className="py-24 border-t border-white/10 mt-16">
          <div className="container mx-auto px-6">

            {/* Section Header */}
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.4em] font-header font-black text-white/40 mb-4 uppercase">
                Visual Showcase
              </p>
              <h2 className="text-4xl md:text-6xl font-header font-black text-white mb-6 tracking-tight">
                Experience the{" "}
                <span className="text-svaasa-brand italic">Soul of Svaasa</span>
              </h2>
              <button
                onClick={() => navigate("/gallery")}
                className="group inline-flex items-center space-x-3 text-white/50 border-b border-white/10 pb-1 hover:text-white hover:border-white transition-all duration-300"
              >
                <span className="text-xs font-header font-black tracking-[0.2em] uppercase">
                  View All Photos
                </span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { key: "all", label: "All Collections" },
                { key: "oldtown", label: "The Old Town" },
                { key: "lotusbliss", label: "Lotus Bliss" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-7 py-3 rounded-full text-xs font-header font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                    filter === key
                      ? "bg-svaasa-brand text-svaasa-black border-svaasa-brand"
                      : "bg-transparent text-white border-white/20 hover:border-white/60"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
              {filtered.map((img, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl cursor-zoom-in break-inside-avoid"
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white">
                      <span className="text-[10px] tracking-widest font-header font-black text-white/60 block">
                        Collection
                      </span>
                      <span className="text-lg font-header font-black">
                        {img.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Farmstays;
