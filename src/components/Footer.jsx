import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Instagram = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Youtube = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-svaasa-black border-t border-white/5 text-svaasa-white px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo Column */}
          <div className="flex flex-col space-y-8">
            <img src={logo} alt="Svaasa" className="h-28 md:h-40 w-auto object-contain mb-4" />
            <div className="flex space-x-6">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-svaasa-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-lg font-header font-black tracking-widest mb-8 border-b border-white/20 pb-4 inline-block">
              Our Farmstays
            </h4>
            <ul className="space-y-4 text-svaasa-gray text-sm flex flex-col font-sans">
              <Link to="/farmstays/old-town" className="hover:text-white transition-colors">The Old Town</Link>
              <Link to="/farmstays/lotus-bliss" className="hover:text-white transition-colors">The Lotus Bliss</Link>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-lg font-header font-black tracking-widest mb-8 border-b border-white/20 pb-4 inline-block">
              Explore Svaasa
            </h4>
            <ul className="space-y-4 text-svaasa-gray text-sm flex flex-col font-sans">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/events" className="hover:text-white transition-colors">Event Space</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-header font-black tracking-widest mb-8 border-b border-white/20 pb-4 inline-block">
              Connect
            </h4>
            <div className="space-y-6 font-sans">
              <div className="flex items-start space-x-4 group">
                <MapPin className="text-svaasa-brand group-hover:scale-110 transition-transform mt-1 shrink-0" size={18} />
                <p className="text-svaasa-gray text-sm leading-relaxed">
                  Opp. Lotusbliss Farmstay, Chilkur Village, <br/>Moinabad Mandal, Hyderabad - 501504
                </p>
              </div>
              <div className="flex items-center space-x-4 group">
                <Phone className="text-svaasa-brand group-hover:scale-110 transition-transform shrink-0" size={18} />
                <p className="text-svaasa-gray text-sm">+91 90191 18384</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <Mail className="text-white group-hover:scale-110 transition-transform shrink-0" size={18} />
                <p className="text-svaasa-gray text-sm">svaasastaycations@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-20 pt-8 border-t border-white/5 text-svaasa-gray text-[10px] tracking-widest font-header font-black">
           © {new Date().getFullYear()} Svaasa Staycations. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
