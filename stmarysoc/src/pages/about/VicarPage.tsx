import React from 'react';
import PageHeader from '../../components/PageHeader';

const VicarPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Our Vicar" 
        description="Learn about our spiritual leader and guide"
      />
      
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="aspect-w-3 aspect-h-4 mb-8">
              {/* Placeholder for vicar's photo - to be added later */}
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Photo Coming Soon</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rev. Fr. [Vicar's Name]</h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Welcome to our parish! As the Vicar of [Church Name], I am blessed to serve 
                our community and guide our congregation in their spiritual journey.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our church is committed to preserving and sharing the rich traditions of 
                the Malankara Orthodox Syrian Christian faith while fostering a welcoming 
                and inclusive community for all who seek to worship with us.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Contact Information</h3>
              <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
                <li>Email: [email address]</li>
                <li>Phone: [phone number]</li>
                <li>Office Hours: [office hours]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VicarPage;