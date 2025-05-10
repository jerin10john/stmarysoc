import React from 'react';
import PageHeader from '../../components/PageHeader';

function SundaySchoolPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Sunday School" 
        description="Nurturing the faith of our next generation"
      />
      <div className="prose prose-invert dark:prose-invert max-w-none">
        <p className="text-lg text-gray-800 dark:text-gray-100 mb-6">
          Our Sunday School program provides spiritual education and moral guidance to children and young adults, 
          helping them grow in their Orthodox Christian faith.
        </p>
      </div>
    </div>
  );
}

export default SundaySchoolPage;