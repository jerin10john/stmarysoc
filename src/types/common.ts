/**
 * Common type definitions used throughout the application
 */

// Navigation related types
export type NavItem = {
  name: string;
  path: string;
  children?: NavItem[];
  external?: boolean;
};

// Service card related types
export type ServiceInfo = {
  title: string;
  time: string;
  day: string;
  description: string;
  location?: string;
};

// Event related types
export type EventInfo = {
  title: string;
  date: string;
  month: string;
  day: string;
  time: string;
  description: string;
  location?: string;
};

// Committee member related types
export type CommitteeMember = {
  name: string;
  role: string;
  imageUrl?: string;
  bio?: string;
  contact?: string;
};

// Saint information type
export type SaintInfo = {
  name: string;
  feast: string;
  description: string;
  imageUrl?: string;
};

// Reusable component props
export type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
};

// Theme related types
export type ThemeMode = 'light' | 'dark' | 'system';