import { useState, useEffect } from 'react';

/**
 * Custom hook to detect when the user has scrolled beyond a certain threshold
 * 
 * @param threshold - Number of pixels to scroll before triggering (default: 10)
 * @returns Boolean indicating if the user has scrolled beyond the threshold
 */
export const useScrollDetection = (threshold = 10): boolean => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

export default useScrollDetection;