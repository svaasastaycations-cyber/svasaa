import React from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Music, Sparkles } from "lucide-react";

import weddingImg from "../assets/wedding.png";
import birthdayImg from "../assets/birthday.png";
import haldiImg from "../assets/haldi.png";
import { Helmet } from "react-helmet";

const EventSpace = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: "Intimate Weddings",
      desc: "Exchange vows in front of a serene backdrop. Our premium farmstays provide the perfect elegant setting for your closest friends and family to celebrate your union in style and absolute privacy.",
      image: weddingImg,
      icon: <Camera size={28} />,
      altTag: "Farm house for wedding in Hyderabad with pool and open space",
    },
    {
      title: "Haldi & Mehendi",
      desc: "Bright, colorful, and joyful. Our expansive lawns and poolside areas offer the most photogenic and traditional yet modern aesthetics for your pre-wedding festivities.",
      image: haldiImg,
      icon: <Sparkles size={28} />,
      altTag: "Farm house for haldi and mehendi in Hyderabad with pool and open space",
    },
    {
      title: "Sophisticated Birthdays",
      desc: "Whether it’s a sweet 16 or a phenomenal 50th, celebrate your milestones with unmatched hospitality, spectacular lighting, and a vibe that your guests will talk about for years.",
      image: birthdayImg,
      icon: <Music size={28} />,
      altTag: "Farm house for birthday in Hyderabad with pool and open space",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Farm House for Party in Hyderabad | Event Venue Svaasa</title>
        <meta
          name="description"
          content="Book a farm house for party in Hyderabad with pool and open space. Ideal for birthdays, events, and corporate gatherings near Chilkur."
        />
        <meta
          name="keywords"
          content="farm house for party in hyderabad, farmhouse events hyderabad, farmhouse for celebrations"
        />
      </Helmet>

      <div className="bg-svaasa-black min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center pt-10 md:pt-20 mb-12 md:mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-header font-black text-svaasa-brand tracking-widest leading-tight">
              Event Spaces
            </h2>
            <p className="mt-8 text-svaasa-gray text-lg md:text-2xl leading-relaxed font-light max-w-2xl mx-auto tracking-wide">
              Elegant Lawns Designed for Unforgettable Moments
            </p>
          </div>

          <div className="space-y-16 md:space-y-32">
            {events.map((event, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-20 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-500">
                    <img
                      src={event.image}
                      alt={event.altTag}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[10%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center text-white rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-500">
                      {event.icon}
                    </div>
                  </div>
                  {/* Glow behind image */}
                  <div className="absolute inset-0 bg-white/5 blur-3xl -z-10 rounded-full scale-90 group-hover:scale-100 transition-transform duration-1000" />
                </div>

                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl md:text-5xl font-header font-black tracking-widest text-svaasa-brand mb-6 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-lg text-svaasa-gray font-light leading-relaxed mb-10">
                    {event.desc}
                  </p>
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-8 py-3 bg-svaasa-brand text-svaasa-black tracking-widest text-xs font-black rounded-full hover:bg-white transition-colors shadow-lg"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* PRICING TABLE FOR EVENTS */}
          <div className="mt-20 md:mt-40 bg-svaasa-card p-6 md:p-16 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Subtle Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="text-center mb-12 md:mb-16 relative z-10">
              <h3 className="text-2xl md:text-5xl font-header font-black tracking-widest text-svaasa-brand mb-6">
                Event Pricing
              </h3>
              <p className="text-svaasa-gray font-light max-w-2xl mx-auto text-lg leading-relaxed">
                Our pricing includes the Farmstay, Event lawns, and all
                amenities at the property—offering you a complete, seamless
                experience.
              </p>
            </div>

            {/* Swipe Indicator for Mobile */}
            <div className="flex items-center justify-center space-x-3 text-white/30 mb-8 tracking-[0.2em] uppercase text-[10px] font-bold">
              <span>Swipe to view pricing</span>
              <span className="text-lg">→</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10 shadow-2xl bg-svaasa-black relative z-10">
              <table className="w-full text-center border-collapse min-w-[600px] md:min-w-0">
                <thead>
                  <tr className="bg-white/5 text-white font-header font-black uppercase tracking-widest text-[10px] md:text-xs border-b border-white/10">
                    <th className="p-6 md:p-8 border-r border-white/10 text-left">
                      Property
                    </th>
                    <th className="p-6 md:p-8 border-r border-white/10">
                      50 Pax
                    </th>
                    <th className="p-6 md:p-8 border-r border-white/10">
                      100 Pax
                    </th>
                    <th className="p-6 md:p-8 border-r border-white/10">
                      150 Pax
                    </th>
                    <th className="p-6 md:p-8">250 Pax</th>
                  </tr>
                </thead>
                <tbody className="text-white font-header font-bold text-sm md:text-lg">
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-6 md:p-8 font-black uppercase tracking-widest text-xs md:text-sm bg-white/5 border-r border-white/10 text-left whitespace-nowrap">
                      The Old Town
                    </td>
                    <td className="p-6 md:p-8 border-r border-white/10">
                      ₹ 38,000/-
                    </td>
                    <td className="p-6 md:p-8 border-r border-white/10">
                      ₹ 60,000/-
                    </td>
                    <td className="p-6 md:p-8 border-r border-white/10">
                      ₹ 75,000/-
                    </td>
                    <td className="p-6 md:p-8">₹ 1,00,000/-</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 md:p-8 font-black uppercase tracking-widest text-xs md:text-sm bg-white/5 border-r border-white/10 text-left whitespace-nowrap">
                      Lotus Bliss
                    </td>
                    <td className="p-6 md:p-8 border-r border-white/10">
                      ₹ 34,000/-
                    </td>
                    <td className="p-6 md:p-8 border-r border-white/10">
                      ₹ 55,000/-
                    </td>
                    <td className="p-6 md:p-8 border-r border-white/10">
                      ₹ 68,000/-
                    </td>
                    <td className="p-6 md:p-8 text-white/10 italic font-medium uppercase text-xs">
                      N/A
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Additional Notes Section */}
            <div className="mt-12 md:mt-16 max-w-4xl mx-auto space-y-6 relative z-10">
              <h4 className="font-serif font-black uppercase tracking-widest text-lg md:text-xl text-white mb-4">
                Important Information
              </h4>
              <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 space-y-6 text-svaasa-gray font-light text-base md:text-lg leading-relaxed">
                <div className="flex items-start space-x-4">
                  <span className="text-white mt-1 shrink-0 bg-white/10 px-2 rounded-full border border-white/10 text-[10px]">
                    1
                  </span>
                  <p>
                    We offer complete wedding packages, fully customizable to
                    your preferences. We also provide Catering, Decor and
                    Photography services through reliable sources.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-white mt-1 shrink-0 bg-white/10 px-2 rounded-full border border-white/10 text-[10px]">
                    2
                  </span>
                  <p>
                    An additional fee of ₹1,000/- per steward for the night will
                    apply if services are required during the stay.{" "}
                    <span className="italic text-white/40 block mt-1">
                      (optional, only if you opt for this service)
                    </span>
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-white mt-1 shrink-0 bg-white/10 px-2 rounded-full border border-white/10 text-[10px]">
                    3
                  </span>
                  <p>
                    Cleaning fee of ₹2,000/- will be charged for Haldi events
                    and any other events that require excessive cleaning.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-white mt-1 shrink-0 bg-white/10 px-2 rounded-full border border-white/10 text-[10px]">
                    4
                  </span>
                  <p>
                    Tent house items are also available for rent. Prices subject
                    to availability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 md:mt-32 bg-svaasa-card border border-white/10 text-white p-8 md:p-24 text-center rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.03)]">
            {/* Background Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <h3 className="text-2xl md:text-5xl font-serif font-black uppercase tracking-widest mb-8 leading-tight">
              Ready to plan your event?
            </h3>
            <p className="text-svaasa-gray mb-12 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-lg">
              Our team is here to assist you with every detail, from selecting
              the right farmstay to tailoring the space perfectly for your
              guests.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-svaasa-black px-12 py-5 font-black tracking-widest hover:bg-white/80 transition-all rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Contact Our Events Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSpace;
