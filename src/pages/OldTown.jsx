import React from "react";
import {
  MapPin,
  BedDouble,
  PartyPopper,
  Tv,
  Wifi,
  Shield,
  Zap,
  Utensils,
  Waves,
  Trophy,
  Flame,
  Gamepad2,
  Bath,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import TermsAndConditions from "../components/TermsAndConditions";
import BookingModal from "../components/BookingModal";
import oldTownHero from "../assets/oldtown.jpg";
import ot1 from "../assets/oldtown/NVN_6141.jpg";
import ot2 from "../assets/oldtown/NVN_6145.jpg";
import ot3 from "../assets/oldtown/NVN_6148.jpg";
import { Helmet } from "react-helmet";

const OldTown = () => {
  const navigate = useNavigate();
  const scrollContainerRef = React.useRef(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  const amenities = [
    { name: "6 Bedrooms", icon: <BedDouble size={28} /> },
    { name: "Entertainment Room", icon: <Tv size={28} /> },
    { name: "Box Cricket", icon: <Trophy size={28} /> },
    { name: "Swimming Pool", icon: <Waves size={28} /> },
    { name: "Billards/ Snookers", icon: <Trophy size={28} /> },
    { name: "7 Bathrooms", icon: <Bath size={28} /> },
    { name: "Barbeque Grill", icon: <Flame size={28} /> },
    { name: "Indoor Games", icon: <Gamepad2 size={28} /> },
    { name: "Bon Fire", icon: <Flame size={28} /> },
    { name: "24/7 Security", icon: <Shield size={28} /> },
    { name: "Electricity Backup", icon: <Zap size={28} /> },
    { name: "Free Wifi", icon: <Wifi size={28} /> },
  ];

  return (
    <>
      <Helmet>
        <title>Private Farm House Near Hyderabad | Old Town Staycation</title>
        <meta
          name="description"
          content="Private farm house near Hyderabad for one day rent, perfect for weekend getaways, small parties, and relaxing nature stays."
        />
        <meta
          name="keywords"
          content="private farm house for rent in hyderabad, farm house for one day rent in hyderabad"
        />
      </Helmet>

      <div className="bg-svaasa-black min-h-screen pb-20">
        {/* 1. Property Hero */}
        <section className="w-full h-[60vh] md:h-[80vh] relative">
          <img
            src={oldTownHero}
            alt="The Old Town Farm House Hyderabad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute bottom-12 left-0 right-0 container mx-auto px-6 z-20 text-center">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-header font-black text-svaasa-brand tracking-tight leading-none mb-2">
              The Old Town
            </h1>
            <p className="text-base md:text-3xl font-header font-bold tracking-widest text-white/60">
              Eventspace & Farmstay
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 max-w-7xl">
          {/* 2. At a Glance */}
          <section className="pt-20 pb-12 border-b border-white/10 text-center">
            <h2 className="text-3xl md:text-5xl font-header font-black text-white mb-10">
              At a Glance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-svaasa-brand group-hover:text-black transition-all duration-500">
                  <MapPin size={32} strokeWidth={1.5} />
                </div>
                <span className="text-xl md:text-2xl font-bold text-svaasa-brand leading-tight">
                  Just 25 mins from ORR
                </span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-svaasa-brand group-hover:text-black transition-all duration-500">
                  <BedDouble size={32} strokeWidth={1.5} />
                </div>
                <span className="text-xl md:text-2xl font-bold text-svaasa-brand leading-tight">
                  6 Vintage Themed Luxury Rooms
                </span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-svaasa-brand group-hover:text-black transition-all duration-500">
                  <Users size={32} strokeWidth={1.5} />
                </div>
                <span className="text-xl md:text-2xl font-bold text-svaasa-brand leading-tight">
                  Upto 25 guests
                </span>
              </div>
            </div>
          </section>

          {/* 3. About Section */}
          <section className="pt-20 pb-12 border-b border-white/10 text-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-header font-black text-white mb-10">
                About
              </h2>
              <div className="text-lg md:text-2xl text-svaasa-gray font-header font-light leading-relaxed space-y-6 md:space-y-10 italic">
                <p>
                  The Old Town is a{" "}
                  <strong className="text-svaasa-brand">
                    vintage-themed luxury villa just 25 min from ORR
                  </strong>
                  —close to the city, yet secluded for complete privacy.
                  Surrounded by lush greenery, it's a sanctuary designed for
                  those who appreciate the finer things in life.
                </p>
                <p>
                  Our{" "}
                  <strong className="text-svaasa-brand">
                    6 handcrafted rooms
                  </strong>{" "}
                  blend classic charm with modern amenities, making it the
                  perfect choice for family gatherings, intimate celebrations,
                  or a peaceful corporate retreat.
                </p>
                <p>
                  Comfortably hosting{" "}
                  <strong className="text-svaasa-brand">up to 25 guests</strong>
                  , it’s ideal for parties, group stays, and special occasions.
                  With an{" "}
                  <strong className="text-svaasa-brand">
                    event space for up to 300 guests
                  </strong>
                  , every celebration feels elevated. Come for the stay, stay
                  for the vibe—because once you’re here, you won’t want to
                  leave.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Amenities Section */}
          <section className="pt-20 pb-12 border-b border-white/10 text-center">
            <h2 className="text-3xl md:text-5xl font-header font-black text-white mb-10">
              Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 max-w-6xl mx-auto">
              {amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-4 md:space-x-6 bg-white/5 p-4 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 group"
                >
                  <div className="text-svaasa-brand shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] md:text-sm font-black tracking-widest uppercase text-white/80 text-left leading-tight">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Experience the Vibe Section */}
          <section className="py-10 border-b border-white/10 text-center">
            <h2 className="text-3xl md:text-5xl font-header font-black text-svaasa-brand mb-16 tracking-tight">
              Experience the Vibe
            </h2>
            <div className="aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/aEJaSHYriFM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* 6. Pricing Section */}
          <section className="pt-20 pb-12 border-b border-white/10 text-center">
            <div className="mb-10">
              <h2 className="text-3xl md:text-6xl font-header font-black text-svaasa-brand tracking-tight mb-4">
                Pricing
              </h2>
              <p className="text-svaasa-gray text-lg md:text-xl font-light">
                Simple, transparent pricing for your perfect getaway
              </p>
            </div>

            <div className="md:hidden flex items-center justify-center space-x-2 text-white/30 mb-4 tracking-widest text-[10px] uppercase font-bold">
              <span>Swipe to view pricing</span>
              <span className="text-lg">→</span>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-white/5 shadow-2xl bg-svaasa-card/50 max-w-4xl mx-auto">
              <table className="w-full text-center border-collapse min-w-[500px] md:min-w-0">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="p-6 md:p-8 text-svaasa-brand font-header font-bold text-sm md:text-lg tracking-wider text-left">
                      Guest Capacity
                    </th>
                    <th className="p-6 md:p-8 text-svaasa-brand font-header font-bold text-sm md:text-lg tracking-wider text-right">
                      Weekdays
                    </th>
                    <th className="p-6 md:p-8 text-svaasa-brand font-header font-bold text-sm md:text-lg tracking-wider text-right">
                      Weekends
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white font-header">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6 md:p-8 text-left text-lg md:text-2xl font-light">
                      Upto 15 Guests
                    </td>
                    <td className="p-6 md:p-8 text-right text-lg md:text-2xl font-light">
                      ₹ 24,000/-
                    </td>
                    <td className="p-6 md:p-8 text-right text-lg md:text-2xl font-light">
                      ₹ 26,000/-
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 md:p-8 text-left text-lg md:text-2xl font-light">
                      From 15-30 Guests
                    </td>
                    <td className="p-6 md:p-8 text-right text-lg md:text-2xl font-light">
                      ₹ 27,000/-
                    </td>
                    <td className="p-6 md:p-8 text-right text-lg md:text-2xl font-light">
                      ₹ 30,000/-
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-16">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-block px-16 py-6 md:px-24 md:py-8 bg-svaasa-brand text-black text-xl md:text-2xl font-black tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_50px_rgba(178,228,138,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                BOOK NOW
              </button>
            </div>

            <p className="text-sm mt-12 text-white/30 font-header tracking-widest uppercase italic font-bold">
              *Prices are inclusive of taxes and subject to change during long
              weekends or public holidays.
            </p>
          </section>
          {/* 7. Gallery Section */}
          <section className="py-20 text-center border-b border-white/10">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-4xl md:text-6xl font-header font-black text-svaasa-brand tracking-tight mb-8">
                Gallery
              </h2>
              <button
                onClick={() => navigate("/gallery")}
                className="group flex items-center space-x-3 text-white/60 border-b border-white/10 pb-2 hover:border-white hover:text-white transition-all duration-300"
              >
                <span className="text-sm font-header font-black tracking-widest uppercase">
                  View All Photos
                </span>
                <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>

            <div className="relative group/gallery max-w-6xl mx-auto">
              {/* Navigation Arrows */}
              <button
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 md:group-hover/gallery:opacity-100 transition-all hover:bg-svaasa-brand hover:text-black hover:scale-110 active:scale-95"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 md:group-hover/gallery:opacity-100 transition-all hover:bg-svaasa-brand hover:text-black hover:scale-110 active:scale-95"
              >
                <ChevronRight size={24} />
              </button>

              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-scroll pb-4 gap-6 scrollbar-hide snap-x snap-mandatory"
              >
                {[
                  { image: ot1, altTag: "Heritage entry gate of The Old Town Farm House Hyderabad" },
                  { image: ot2, altTag: "Farm house for rent in Hyderabad with traditional architecture" },
                  { image: ot3, altTag: "Luxury farmhouse in Hyderabad ideal for peaceful stay" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[85vw] md:min-w-[500px] aspect-[4/3] overflow-hidden rounded-[2rem] snap-center border border-white/10 shadow-2xl"
                  >
                    <img
                      src={item.image}
                      alt={item.altTag}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                ))}
              </div>

              {/* Mobile/Bottom Navigation Arrows & Progress Bar */}
              <div className="mt-4 flex items-center justify-between max-w-[300px] mx-auto px-4">
                <button
                  onClick={() => scroll("left")}
                  className="p-2 text-white/20 hover:text-svaasa-brand transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="flex-1 mx-6 h-[3px] bg-white/30 relative rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-svaasa-brand transition-all duration-300 ease-out"
                    style={{
                      width: `${Math.max(20, 100 / 3)}%`,
                      left: `${scrollProgress * (2 / 3)}%`,
                    }}
                  />
                </div>

                <button
                  onClick={() => scroll("right")}
                  className="p-2 text-white/20 hover:text-svaasa-brand transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </section>

          {/* 8. Terms and Conditions at the end */}
          <section className="py-10">
            <TermsAndConditions />
          </section>
        </div>

        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          propertyName="The Old Town"
        />
      </div>
    </>
  );
};

export default OldTown;
