import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Instagram = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Google = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 48 48"
    className={className}
  >
    <path d="M43.6 20.5H42V20H24v8h11.3C33.8 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.9 6.1 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.5-.4-3.5z" />
    <path d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.9 6.1 29.2 4 24 4 16.3 4 9.7 8.4 6.3 14.7z" />
    <path d="M24 44c5.2 0 9.9-2 13.4-5.3l-6.2-5.1C29.1 35.5 26.7 36 24 36c-5.3 0-9.8-3.3-11.4-8l-6.5 5C9.5 39.4 16.1 44 24 44z" />
    <path d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.3 5.5-6.1 7.1l6.2 5.1C39.9 36.6 44 30.8 44 24c0-1.3-.1-2.5-.4-3.5z" />
  </svg>
);
const Linkedin = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const socialLinks = [
  {
    icon: Instagram,
    url: "https://www.instagram.com/svaasa_staycations/",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61574776824534",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/@SVAASAStaycations",
  },
  {
    icon: Google,
    url: "https://share.google/Pw5N3Ll4niiFsrW1j",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/",
  },
];
const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-svaasa-black border-t border-white/5 text-svaasa-white px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo Column */}
          <div className="flex flex-col space-y-8">
            <img
              src={logo}
              alt="Svaasa"
              className="h-28 md:h-40 w-auto object-contain mb-4"
            />
            <div className="flex space-x-1">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-svaasa-black transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-lg font-header font-black tracking-widest mb-8 border-b border-white/20 pb-4 inline-block">
              Our Farmstays
            </h4>
            <ul className="space-y-4 text-svaasa-gray text-sm flex flex-col font-sans">
              <Link
                to="/farmstays/old-town"
                className="hover:text-white transition-colors"
              >
                The Old Town
              </Link>
              <Link
                to="/farmstays/lotus-bliss"
                className="hover:text-white transition-colors"
              >
                The Lotus Bliss
              </Link>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-lg font-header font-black tracking-widest mb-8 border-b border-white/20 pb-4 inline-block">
              Explore Svaasa
            </h4>
            <ul className="space-y-4 text-svaasa-gray text-sm flex flex-col font-sans">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/events" className="hover:text-white transition-colors">
                Event Space
              </Link>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-header font-black tracking-widest mb-8 border-b border-white/20 pb-4 inline-block">
              Connect
            </h4>
            <div className="space-y-6 font-sans">
              <div className="flex items-start space-x-4 group">
                <MapPin
                  className="text-svaasa-brand group-hover:scale-110 transition-transform mt-1 shrink-0"
                  size={18}
                />
                <p className="text-svaasa-gray text-sm leading-relaxed">
                  Opp. Lotusbliss Farmstay, Chilkur Village, <br />
                  Moinabad Mandal, Hyderabad - 501504
                </p>
              </div>
              <div className="flex items-center space-x-4 group">
                <Phone
                  className="text-svaasa-brand group-hover:scale-110 transition-transform shrink-0"
                  size={18}
                />
                <p className="text-svaasa-gray text-sm">+91 90191 18384</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <Mail
                  className="text-white group-hover:scale-110 transition-transform shrink-0"
                  size={18}
                />
                <p className="text-svaasa-gray text-sm">
                  svaasastaycations@gmail.com
                </p>
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
