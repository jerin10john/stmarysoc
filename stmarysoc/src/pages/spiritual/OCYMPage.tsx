import React from 'react';
import PageHeader from '../../components/PageHeader';

function OCYMPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Orthodox Christian Youth Movement (OCYM)" 
        description="Empowering the youth in faith and fellowship"
      />
      <div className="prose prose-invert dark:prose-invert max-w-none">
        <p className="text-lg text-gray-800 dark:text-gray-100 mb-6">
          The Orthodox Christian Youth Movement (OCYM) serves as a platform for young adults to strengthen their 
          faith, engage in community service, and build lasting friendships within the church community.
        </p>
      </div>
    </div>
  );
}

export default OCYMPage;