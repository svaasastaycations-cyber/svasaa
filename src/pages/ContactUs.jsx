import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Farm House Booking Hyderabad | Contact Svaasa</title>
        <meta
          name="description"
          content="Contact us to book farm house in Hyderabad for rent, events, and weekend stays near Chilkur with private pool and luxury setup."
        />
      </Helmet>

      <div className="bg-svaasa-black min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h1 className="text-sm tracking-widest font-black font-header text-white/60 mb-6">
              Get in Touch
            </h1>
            <h2 className="text-3xl md:text-6xl font-header font-black text-white tracking-wider">
              Ready to{" "}
              <span className="text-svaasa-brand italic">
                Experience Svaasa?
              </span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Methods */}
            <div className="space-y-10 lg:space-y-12">
              <h3 className="text-xl md:text-2xl font-header font-black text-white mb-6 md:mb-8 border-b border-white/20 pb-4 inline-block tracking-widest">
                Contact Information
              </h3>

              <div className="space-y-6 md:space-y-8 bg-svaasa-card p-6 md:p-10 rounded-3xl shadow-xl border border-white/10">
                <a
                  href="tel:+919019118384"
                  className="flex items-center space-x-4 md:space-x-6 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-svaasa-brand/10 border border-svaasa-brand/20 rounded-full flex items-center justify-center text-svaasa-brand group-hover:bg-svaasa-brand group-hover:text-svaasa-black transition-all duration-300 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] md:text-sm tracking-widest text-white/40 font-black font-header">
                      Call Us
                    </h4>
                    <p className="text-white font-medium text-base md:text-lg mt-1">
                      +91 90191 18384
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919019118384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 md:space-x-6 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-svaasa-brand/10 border border-svaasa-brand/20 rounded-full flex items-center justify-center text-svaasa-brand group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 group-hover:border-transparent shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] md:text-sm tracking-widest text-white/40 font-black font-header">
                      WhatsApp Us
                    </h4>
                    <p className="text-white font-medium text-base md:text-lg mt-1">
                      +91 90191 18384
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:svaasastaycations@gmail.com"
                  className="flex items-center space-x-4 md:space-x-6 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-svaasa-brand/10 border border-svaasa-brand/20 rounded-full flex items-center justify-center text-svaasa-brand group-hover:bg-svaasa-brand group-hover:text-svaasa-black transition-all duration-300 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] md:text-sm tracking-widest text-white/40 font-black font-header">
                      Mail
                    </h4>
                    <p className="text-white font-medium text-base md:text-lg mt-1 break-all">
                      svaasastaycations@gmail.com
                    </p>
                  </div>
                </a>

                <div className="space-y-6 pt-6 border-t border-white/10">
                  <div className="flex items-start space-x-4 md:space-x-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-svaasa-black transition-all duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] md:text-sm tracking-widest text-svaasa-brand font-black font-header uppercase mb-1">
                        The Lotus Bliss
                      </h4>
                      <p className="text-white font-medium text-base md:text-lg leading-relaxed">
                        Chilkur, Hyderabad-501504
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 md:space-x-6 group pt-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-svaasa-black transition-all duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] md:text-sm tracking-widest text-svaasa-brand font-black font-header uppercase mb-1">
                        The Old Town
                      </h4>
                      <p className="text-white font-medium text-base md:text-lg leading-relaxed">
                        Chilkur Village, Moinabad, Hyderabad-501504
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Maps */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl md:text-2xl font-header font-black text-white mb-6 border-b border-white/20 pb-4 inline-block tracking-widest uppercase">
                  Lotus Bliss Map
                </h3>
                <div className="bg-svaasa-card p-2 md:p-4 rounded-3xl shadow-xl border border-white/10 h-[300px] md:h-[400px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.9269244428897!2d78.26958809999999!3d17.367248999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbeb0077d97fbb%3A0x828478d1c2c53da!2sLotus%20Bliss%20Farm%20Stay-%20By%20Svaasa%20Stacations!5e0!3m2!1sen!2sin!4v1776427158808!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lotus Bliss Location"
                    className="rounded-2xl md:rounded-[1.2rem] w-full h-full"
                  ></iframe>
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-header font-black text-white mb-6 border-b border-white/20 pb-4 inline-block tracking-widest uppercase">
                  Old Town Map
                </h3>
                <div className="bg-svaasa-card p-2 md:p-4 rounded-3xl shadow-xl border border-white/10 h-[300px] md:h-[400px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925.3437367246416!2d78.1991960898052!3d17.381361106336453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbe9896b53657b%3A0xe498a277a63073c5!2sThe%20OLD%20TOWN%20Eventspace%20%26%20Farmstay!5e0!3m2!1sen!2sin!4v1776427133550!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Old Town Location"
                    className="rounded-2xl md:rounded-[1.2rem] w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
