import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A custom hook that scrolls to the top of the page when the pathname changes.
 * To use this hook, simply import and call it within a component that has access
 * to the React Router context (i.e., is inside your Router).
 * 
 * Example:
 * ```
 * const MyComponent = () => {
 *   useScrollToTop();
 *   return <div>...</div>;
 * };
 * ```
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

/**
 * ScrollToTop component - an alternative to the hook if you prefer to use it as a component.
 * Place this component inside your Router, typically near the root of your app.
 * 
 * Example:
 * ```
 * <Router>
 *   <ScrollToTop />
 *   <Routes>
 *     ...
 *   </Routes>
 * </Router>
 * ```
 */
export const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

export default ScrollToTop;