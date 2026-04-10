import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-svaasa-black min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h1 className="text-sm tracking-widest font-black font-header text-white/60 mb-6">
            Get in Touch
          </h1>
          <h2 className="text-3xl md:text-6xl font-header font-black text-white tracking-wider">
            Ready to <span className="text-svaasa-brand italic">Experience Svaasa?</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-10 lg:space-y-12">
            <h3 className="text-xl md:text-2xl font-header font-black text-white mb-6 md:mb-8 border-b border-white/20 pb-4 inline-block tracking-widest">
              Contact Information
            </h3>
            
            <div className="space-y-6 md:space-y-8 bg-svaasa-card p-6 md:p-10 rounded-3xl shadow-xl border border-white/10">
              <a href="tel:+919019118384" className="flex items-center space-x-4 md:space-x-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-svaasa-brand/10 border border-svaasa-brand/20 rounded-full flex items-center justify-center text-svaasa-brand group-hover:bg-svaasa-brand group-hover:text-svaasa-black transition-all duration-300 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] md:text-sm tracking-widest text-white/40 font-black font-header">Call Us</h4>
                  <p className="text-white font-medium text-base md:text-lg mt-1">+91 90191 18384</p>
                </div>
              </a>

              <a href="https://wa.me/919019118384" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 md:space-x-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-svaasa-brand/10 border border-svaasa-brand/20 rounded-full flex items-center justify-center text-svaasa-brand group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 group-hover:border-transparent shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] md:text-sm tracking-widest text-white/40 font-black font-header">WhatsApp Us</h4>
                  <p className="text-white font-medium text-base md:text-lg mt-1">+91 90191 18384</p>
                </div>
              </a>

              <a href="mailto:svaasastaycations@gmail.com" className="flex items-center space-x-4 md:space-x-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-svaasa-brand/10 border border-svaasa-brand/20 rounded-full flex items-center justify-center text-svaasa-brand group-hover:bg-svaasa-brand group-hover:text-svaasa-black transition-all duration-300 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] md:text-sm tracking-widest text-white/40 font-black font-header">Mail</h4>
                  <p className="text-white font-medium text-base md:text-lg mt-1 break-all">svaasastaycations@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 md:space-x-6 group pt-6 border-t border-white/10">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-svaasa-black transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div className="mt-1">
                  <h4 className="text-[10px] md:text-sm tracking-widest text-white/40 font-black font-header">Location</h4>
                  <p className="text-white font-medium text-base md:text-lg mt-1 leading-relaxed">
                    Lotusbliss Farmstay, Chilkur,<br/>Hyderabad-501504
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
