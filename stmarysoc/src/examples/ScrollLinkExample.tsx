import React from 'react';
import { Link } from 'react-router-dom';
import ScrollLink from '../components/ScrollLink';
import { handleLinkClick } from '../utils/scrollUtils';

/**
 * This example component demonstrates how to use ScrollLink 
 * instead of the standard React Router Link component.
 */
const ScrollLinkExample: React.FC = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">ScrollLink Usage Examples</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Before: Regular Links</h2>
        <div className="space-y-2">
          {/* Standard Link without scroll behavior */}
          <div>
            <Link to="/about" className="text-blue-600 hover:underline">
              About (No scroll behavior)
            </Link>
          </div>
          
          {/* Link with manual scroll handling */}
          <div>
            <Link 
              to="/contact" 
              className="text-blue-600 hover:underline"
              onClick={handleLinkClick()}
            >
              Contact (With manual scroll handler)
            </Link>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">After: Using ScrollLink</h2>
        <div className="space-y-2">
          {/* ScrollLink automatically handles scroll behavior */}
          <div>
            <ScrollLink to="/about" className="text-green-600 hover:underline">
              About (Automatic scroll behavior)
            </ScrollLink>
          </div>
          
          {/* ScrollLink with custom onClick */}
          <div>
            <ScrollLink 
              to="/contact" 
              className="text-green-600 hover:underline"
              onClick={(e) => {
                console.log('Link clicked!');
                // The scroll behavior is already handled by ScrollLink
              }}
            >
              Contact (With additional onClick handler)
            </ScrollLink>
          </div>
        </div>
      </section>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <p className="text-sm">
          <strong>Note:</strong> The ScrollLink component automatically scrolls the page to the top 
          when clicked, without needing any additional handlers. It's a drop-in replacement for the 
          regular Link component.
        </p>
      </div>
    </div>
  );
};

export default ScrollLinkExample;