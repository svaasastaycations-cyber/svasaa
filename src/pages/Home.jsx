import React from "react";
import SvaasaHero from "../components/SvaasaHero";
import EscapeSection from "../components/EscapeSection";
import SvaasaProperties from "../components/SvaasaProperties";
import IntimateMoments from "../components/IntimateMoments";
import Testimonials from "../components/Testimonials";
import SvaasaOffers from "../components/SvaasaOffers";
import HomeGallery from "../components/HomeGallery";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Best Farm House in Hyderabad with Pool | Svaasa Staycations
        </title>
        <meta
          name="description"
          content="Book the best farm house in Hyderabad with swimming pool for rent. Perfect for parties, weekend stays, and luxury staycations near Chilkur."
        />
        <meta
          name="keywords"
          content="farm house hyderabad, farm house for rent in hyderabad, luxury farmhouse in hyderabad, farm house with swimming pool, farm house near hyderabad"
        />
      </Helmet>

      <div className="w-full relative bg-svaasa-black">
        <SvaasaHero />
        <div className="py-4 md:py-6">
          <hr className="border-white/5 max-w-7xl mx-auto" />
        </div>

        <SvaasaProperties />
        <div className="py-4 md:py-6">
          <hr className="border-white/5 max-w-7xl mx-auto" />
        </div>

        <HomeGallery />
        <div className="py-4 md:py-6">
          <hr className="border-white/5 max-w-7xl mx-auto" />
        </div>

        <IntimateMoments />
        <div className="py-4 md:py-6">
          <hr className="border-white/5 max-w-7xl mx-auto" />
        </div>

        <Testimonials />
        <div className="py-4 md:py-6">
          <hr className="border-white/5 max-w-7xl mx-auto" />
        </div>

        <SvaasaOffers />
      </div>
    </>
  );
};

export default Home;
