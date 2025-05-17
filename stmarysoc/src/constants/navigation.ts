/**
 * Navigation constants for the application
 * Contains the structure for the main navigation menu
 */

// Import and re-export NavItem type from common types
import { NavItem } from '../types/common';
export type { NavItem };

/**
 * Main navigation items used across the application
 */
export const NAVIGATION_ITEMS: NavItem[] = [
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