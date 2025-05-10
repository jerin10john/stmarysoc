import React from 'react';
import { Link } from 'react-router-dom';
import { Cross, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Cross className="h-6 w-6 text-blue-700 dark:text-blue-400" />
              <span className="ml-2 text-lg font-serif font-semibold">
                St. Mary's Orthodox
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              St. Mary's Malankara Orthodox Syrian Congregation has been serving the faithful since 2017.
              Rooted in the teachings of Christ and the Orthodox tradition.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about/saints"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Saints
                </Link>
              </li>
              <li>
                <Link
                  to="/about/leadership"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">
                  stmarysmosckw@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">
                  (647) 936-7744
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">
                  121 Westmount Road East,<br />
                  Kitchener, ON, N2M 4Y6
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} St. Mary's Malankara Orthodox Syrian Congregation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;