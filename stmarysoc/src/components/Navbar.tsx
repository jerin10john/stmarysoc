import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, Cross } from 'lucide-react';

type NavItem = {
  name: string;
  path: string;
  children?: NavItem[];
  external?: boolean;
};

const navItems: NavItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/about',
    children: [
      { name: 'Saints', path: '/about/saints' },
      { name: 'Patron Saint', path: '/about/patron-saint' },
      { name: 'Vicar', path: '/about/vicar' },
      { name: 'Malankara Orthodox Syrian Church', path: 'https://mosc.in/', external: true },
      { name: 'Managing Committee', path: '/about/committee' },
    ],
  },
  {
    name: 'Spiritual Organizations',
    path: '/spiritual',
    children: [
      { name: 'MMVS', path: '/spiritual/mmvs' },
      { name: 'Sunday School', path: '/spiritual/sunday-school' },
      { name: 'OCYM', path: '/spiritual/ocym' },
    ],
  },
  {
    name: 'Contact Us',
    path: '/contact',
    children: [
      { name: 'Resources', path: '/resources' },
    ],
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenMenus([]);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (name: string) => {
    setOpenMenus((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const isSubMenuOpen = (name: string) => openMenus.includes(name);

  return (
    <header
      className="fixed top-0 left-0 w-full z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md transition-all duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 px-2 md:px-6">
          <Link to="/" className="flex items-center min-w-0 gap-2 md:gap-3 whitespace-nowrap">
            <img 
              src="/logos/STMOC_logo.png" 
              alt="St. Mary's Orthodox Church Logo" 
              className="h-10 w-10 md:h-12 md:w-auto flex-shrink-0"
            />
            <span className="text-lg md:text-xl font-serif font-semibold whitespace-nowrap overflow-hidden text-ellipsis w-auto max-w-[60vw]">
              St. Mary's Orthodox Congregation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-maroon-700 dark:text-maroon-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-maroon-600 dark:hover:text-maroon-300'
                  }`}
                >
                  <span className="flex items-center gap-1">
                      {item.name}
                      {item.children && item.children.length > 0 && (
                        <ChevronDown className="ml-0.5 h-4 w-4" />
                      )}
                    </span>
                </Link>

                {item.children && item.children.length > 0 && (
                  <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform scale-95 group-hover:scale-100 z-50 border border-gray-100 dark:border-gray-700">
                    <div className="py-2 rounded-lg bg-white dark:bg-gray-800">
                      {item.children.map((child) => (
                        child.external ? (
                          <a
                            key={child.name}
                            href={child.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-maroon-50 dark:hover:bg-maroon-900/20 hover:text-maroon-700 dark:hover:text-maroon-400 transition-colors duration-150 ease-in-out"
                          >
                            {child.name}
                          </a>
                        ) : (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-maroon-50 dark:hover:bg-maroon-900/20 hover:text-maroon-700 dark:hover:text-maroon-400 transition-colors duration-150 ease-in-out"
                          >
                            {child.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-maroon-700 dark:hover:text-maroon-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden ${
          isOpen ? 'block' : 'hidden'
        } bg-white dark:bg-gray-900 shadow-xl overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="container mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.children && item.children.length > 0 ? (
                <div>
                  <button
                    onClick={() => toggleSubMenu(item.name)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center ${
                      location.pathname === item.path
                        ? 'bg-maroon-50 dark:bg-maroon-900/20 text-maroon-700 dark:text-maroon-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                    {isSubMenuOpen(item.name) ? (
                        <ChevronUp className="h-5 w-5 ml-1" />
                      ) : (
                        <ChevronDown className="h-5 w-5 ml-1" />
                      )}
                  </button>
                  <div
                    className={`mt-1 pl-4 border-l-2 border-gray-200 dark:border-gray-700 ${
                      isSubMenuOpen(item.name) ? 'block' : 'hidden'
                    }`}
                  >
                    {item.children.map((child) => (
                      child.external ? (
                        <a
                          key={child.name}
                          href={child.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block px-3 py-2 rounded-md text-base font-medium ${
                            location.pathname === child.path
                              ? 'text-maroon-700 dark:text-maroon-400'
                              : 'text-gray-600 dark:text-gray-400 hover:text-maroon-600 dark:hover:text-maroon-300'
                          }`}
                        >
                          {child.name}
                        </a>
                      ) : (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`block px-3 py-2 rounded-md text-base font-medium ${
                            location.pathname === child.path
                              ? 'text-maroon-700 dark:text-maroon-400'
                              : 'text-gray-600 dark:text-gray-400 hover:text-maroon-600 dark:hover:text-maroon-300'
                          }`}
                        >
                          {child.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-maroon-50 dark:bg-maroon-900/20 text-maroon-700 dark:text-maroon-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;