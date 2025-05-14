import React from 'react';
import { Link } from 'react-router-dom';
import { Cross, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 flex flex-col items-center justify-center w-full px-2 pt-0 pb-8">
      <div className="relative w-full max-w-7xl xl:max-w-[90vw] mx-auto rounded-3xl bg-black/60 dark:bg-gray-900/70 backdrop-blur-xl shadow-3xl md:shadow-[0_8px_40px_8px_rgba(0,0,0,0.25)] border border-white/10 dark:border-gray-700 px-2 sm:px-6 py-12 md:px-16 md:py-16 flex flex-col">
        {/* Sheen/shine effect in corners */}
        <span className="pointer-events-none absolute top-0 left-0 w-32 h-32 rounded-tl-3xl bg-gradient-to-br from-white/30 to-transparent opacity-30" />
        <span className="pointer-events-none absolute top-0 right-0 w-32 h-32 rounded-tr-3xl bg-gradient-to-bl from-white/20 to-transparent opacity-20" />
        <span className="pointer-events-none absolute bottom-0 left-0 w-32 h-32 rounded-bl-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-10" />
        <span className="pointer-events-none absolute bottom-0 right-0 w-32 h-32 rounded-br-3xl bg-gradient-to-tl from-white/10 to-transparent opacity-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {/* Logo/About + Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/logos/STMOC_logo.png" 
                  alt="St. Mary's Orthodox Church Logo" 
                  className="h-7 w-auto"
                />
                <span className="ml-2 text-xl font-serif font-semibold text-white/90 dark:text-white">
                  St. Mary's Orthodox
                </span>
              </div>
              <p className="text-gray-200 dark:text-gray-300 mb-6 text-sm">
                St. Mary's Malankara Orthodox Syrian Congregation has been serving the faithful since 2017.<br />
                Rooted in the teachings of Christ and the Orthodox tradition.
              </p>
            </div>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-gray-300 hover:text-maroon-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-maroon-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-maroon-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-widest text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-maroon-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://mosc.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-maroon-400 transition-colors"
                >
                  Malankara Orthodox Syrian Church
                </a>
              </li>
              <li>
                <Link
                  to="/about/saints"
                  className="text-gray-300 hover:text-maroon-400 transition-colors"
                >
                  Saints
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-maroon-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-widest text-gray-100 mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-maroon-700 dark:text-maroon-400 mr-3 mt-0.5" />
                <span className="text-gray-200 dark:text-gray-300 text-sm">
                  stmarysmosckw@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-maroon-700 dark:text-maroon-400 mr-3 mt-0.5" />
                <span className="text-gray-200 dark:text-gray-300 text-sm">
                  (647) 936-7744
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-maroon-700 dark:text-maroon-400 mr-3 mt-0.5" />
                <span className="text-gray-200 dark:text-gray-300 text-sm">
                  121 Westmount Road East,<br />
                  Kitchener, ON, N2M 4Y6
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-white/10 dark:border-gray-700 text-gray-400 text-xs gap-4 relative z-10">
          <p className="text-left w-full md:w-auto">
            &copy; {new Date().getFullYear()} St. Mary's Malankara Orthodox Syrian Congregation. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-maroon-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-maroon-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-maroon-400 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;