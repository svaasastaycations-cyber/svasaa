import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveSubMenu(null);
  }, [location]);

  return (
    <>
      {/* TOP NAVBAR */}
      {/* TOP NAVBAR (Floating Glass Bar) */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled ? "h-20 md:h-28 bg-svaasa-black/40 backdrop-blur-2xl border-b border-white/10 shadow-2xl" : "h-24 md:h-32 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-full w-full">

          {/* LOGO (Left aligned like Ganvik) */}
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center transition-transform hover:scale-105 duration-500 z-50 ml-2 md:ml-6"
          >
            <img src={logo} alt="Svaasa" className="h-24 md:h-32 w-auto object-contain" />
          </Link>

          {/* MENU BUTTON (Right aligned like Ganvik) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-4 mr-2 md:mr-6 transition-all hover:opacity-70 text-white z-50 group flex flex-col items-end space-y-2 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 backdrop-blur-md"
          >
            <span className="block w-8 h-[2px] bg-white group-hover:w-10 transition-all"></span>
            <span className="block w-10 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white group-hover:w-10 transition-all"></span>
          </button>

        </div>
      </nav>


      {/* OFF-CANVAS SLIDING MENU (UNIVERSAL OVERLAY) */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* INVISIBLE OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-svaasa-black/40 backdrop-blur-sm"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveSubMenu(null);
              }}
            />

            {/* SLIDING PANEL */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`relative h-full bg-svaasa-card/95 backdrop-blur-3xl shadow-2xl flex flex-col px-8 md:px-12 py-10 overflow-hidden transition-[width] duration-300 ease-in-out border-r border-white/5 ${
                activeSubMenu ? "w-full md:w-[600px]" : "w-full md:w-[400px]"
              }`}
            >
              
              {/* TOP BAR: Close Button */}
              <div className="flex justify-end items-start w-full">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSubMenu(null);
                  }}
                  className="text-white/60 hover:text-white hover:rotate-90 transition-all p-2 mt-1 shrink-0"
                >
                  <X size={32} strokeWidth={2} />
                </button>
              </div>

              {/* MENU CONTENT AREA */}
              <div className="relative mt-12 md:mt-16 flex-grow overflow-hidden">
                <motion.div
                  animate={{ x: activeSubMenu ? (window.innerWidth < 768 ? "-50%" : "0%") : "0%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="flex w-[200%] md:w-full h-full"
                >
                  {/* LEFT COLUMN: Main Nav */}
                  <div className="flex flex-col space-y-6 md:space-y-8 w-1/2 md:w-[300px] shrink-0 z-10 px-0 md:px-4">
                    <Link
                      to="/"
                      className="flex justify-start mb-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img src={logo} alt="SVAASA" className="h-24 md:h-20 w-auto object-contain" />
                    </Link>

                    <div
                      onClick={() => setActiveSubMenu("farmstays")}
                      className="flex items-center space-x-3 text-white text-xl md:text-2xl font-black font-header tracking-widest cursor-pointer group w-max"
                    >
                      <span className="group-hover:text-white/60 transition-colors">Farmstays</span>
                      <span className="text-2xl font-black leading-none transform group-hover:translate-x-1 transition-transform">›</span>
                    </div>

                    <Link
                      to="/gallery"
                      className="text-white text-xl md:text-2xl font-black font-header tracking-widest hover:text-white/60 transition-colors w-max"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Gallery
                    </Link>

                    <Link
                      to="/events"
                      className="text-white text-xl md:text-2xl font-black font-header tracking-widest hover:text-white/60 transition-colors w-max"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Event Space
                    </Link>

                    <Link
                      to="/contact"
                      className="text-white text-xl md:text-2xl font-black font-header tracking-widest hover:text-white/60 transition-colors w-max"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>

                  {/* RIGHT COLUMN: Sub Nav */}
                  <div className="w-1/2 md:w-[300px] shrink-0 relative z-0 px-4 md:px-6">
                    <AnimatePresence mode="wait">
                      {activeSubMenu === "farmstays" && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col space-y-6 md:space-y-8 pt-4 md:pt-20"
                        >
                          {/* BACK BUTTON (Mobile Only or Breadcrumb) */}
                          <div
                            onClick={() => setActiveSubMenu(null)}
                            className="flex items-center space-x-2 text-white/70 cursor-pointer group -ml-1 mb-4 w-max hover:text-white transition-colors"
                          >
                            <span className="text-2xl font-black leading-none transform group-hover:-translate-x-1 transition-transform">‹</span>
                            <span className="text-sm md:text-base font-header font-bold tracking-widest">Back</span>
                          </div>

                          <div className="space-y-6 md:space-y-8">
                            <Link
                              to="/farmstays/old-town"
                              className="block text-white text-lg md:text-xl font-black font-header tracking-widest hover:text-white/60 transition-colors leading-tight"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              The Old Town
                            </Link>

                            <Link
                              to="/farmstays/lotus-bliss"
                              className="block text-white text-lg md:text-xl font-black font-header tracking-widest hover:text-white/60 transition-colors leading-tight"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              The Lotus Bliss
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>

              {/* BOTTOM CONTACT INFO */}
              <div className="mt-auto pt-10 flex flex-col space-y-2 text-svaasa-gray text-[10px] md:text-xs tracking-widest font-header border-t border-white/5">
                <p className="text-white/40 mb-1">Enquiries</p>
                <p className="text-white hover:text-white/80 transition-colors">+91 90191 18384</p>
                <p className="text-white hover:text-white/80 transition-colors">svaasastaycations@gmail.com</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;