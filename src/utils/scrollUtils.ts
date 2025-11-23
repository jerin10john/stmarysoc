/**
 * Scroll utilities for handling page and element scrolling behavior
 */

/**
 * Scrolls the window to the top of the page
 * @param smooth Whether to use smooth scrolling behavior (default: false)
 */
export const scrollToTop = (smooth: boolean = false): void => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: smooth ? 'smooth' : 'auto'
  });
};

/**
 * Creates a click handler for links that ensures the page scrolls to the top
 * Can be used with both React Router Links and regular anchor tags
 * 
 * @param callback Optional callback function to run after handling the scroll
 * @returns Event handler function
 */
export const handleLinkClick = (callback?: () => void) => {
  return (e: React.MouseEvent): void => {
    // Don't interfere with modifier keys or middle button clicks
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) {
      return;
    }
    
    // Reset scroll position
    scrollToTop();
    
    // Call the callback if provided
    if (callback) {
      callback();
    }
  };
};

/**
 * Scrolls to a specific element with ID
 * @param elementId The ID of the element to scroll to
 * @param smooth Whether to use smooth scrolling (default: true)
 * @param offset Offset from the top in pixels (default: 0)
 */
export const scrollToElement = (
  elementId: string,
  smooth: boolean = true,
  offset: number = 0
): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }
};