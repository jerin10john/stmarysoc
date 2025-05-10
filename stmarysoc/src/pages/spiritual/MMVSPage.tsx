import React from 'react';
import PageHeader from '../../components/PageHeader';

function MMVSPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Martha Mariam Vanitha Samajam (MMVS)" 
        description="The women's ministry of the Malankara Orthodox Syrian Church"
      />
      <div className="prose prose-invert dark:prose-invert max-w-none">
        <p className="text-lg text-gray-800 dark:text-gray-100 mb-6">
          The Martha Mariam Vanitha Samajam (MMVS) is the women's ministry of the Malankara Orthodox Syrian Church, 
          dedicated to spiritual growth, charitable activities, and community service.
        </p>
      </div>
    </div>
  );
}

export default MMVSPage;