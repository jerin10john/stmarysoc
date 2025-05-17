import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollUtils';

/**
 * ScrollLink is a wrapper around the React Router Link component
 * that automatically scrolls to the top of the page when clicked.
 * 
 * This component accepts all the same props as Link.
 */
const ScrollLink: React.FC<LinkProps> = ({ 
  children, 
  onClick,
  ...props 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Don't interfere with modifier keys or middle button clicks
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) {
      return;
    }
    
    // Scroll to top
    scrollToTop();
    
    // Call original onClick handler if it exists
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;