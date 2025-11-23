import React from 'react';

type ChurchSvgProps = {
  className?: string;
};

// Church dome SVG illustration
export const ChurchDome: React.FC<ChurchSvgProps> = ({ className = 'w-24 h-24' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M50,10 L50,30" />
      <path d="M40,30 L60,30" />
      <path d="M30,50 C30,40 40,30 50,30 C60,30 70,40 70,50" />
      <path d="M30,50 L30,80" />
      <path d="M70,50 L70,80" />
      <path d="M30,80 L70,80" />
      <path d="M45,80 L45,65 L55,65 L55,80" />
      <circle cx="50" cy="20" r="5" />
    </svg>
  );
};

// Cross SVG illustration
export const CrossIcon: React.FC<ChurchSvgProps> = ({ className = 'w-24 h-24' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M50,10 L50,90" />
      <path d="M30,30 L70,30" />
    </svg>
  );
};

// Bible SVG illustration
export const BibleIcon: React.FC<ChurchSvgProps> = ({ className = 'w-24 h-24' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="20" y="30" width="60" height="40" rx="2" />
      <path d="M50,30 L50,70" />
      <path d="M20,40 L80,40" />
      <path d="M27,50 L43,50" />
      <path d="M27,55 L43,55" />
      <path d="M27,60 L43,60" />
      <path d="M57,50 L73,50" />
      <path d="M57,55 L73,55" />
      <path d="M57,60 L73,60" />
    </svg>
  );
};

// Chalice SVG illustration
export const ChaliceIcon: React.FC<ChurchSvgProps> = ({ className = 'w-24 h-24' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M40,30 L60,30" />
      <path d="M35,30 C35,50 30,60 30,70 C30,80 40,85 50,85 C60,85 70,80 70,70 C70,60 65,50 65,30" />
      <path d="M45,20 L55,20" />
      <path d="M50,20 L50,30" />
      <ellipse cx="50" cy="70" rx="10" ry="5" />
    </svg>
  );
};

export default {
  ChurchDome,
  CrossIcon,
  BibleIcon,
  ChaliceIcon
};