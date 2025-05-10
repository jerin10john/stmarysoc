import React from 'react';
import PageHeader from '../../components/PageHeader';

const MalankaraPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Malankara Orthodox Syrian Church" 
        description="Learn about the history and traditions of the Malankara Orthodox Syrian Church"
      />
      
      <div className="max-w-4xl mx-auto mt-8 space-y-8">
        <section className="prose dark:prose-invert prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Heritage</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The Malankara Orthodox Syrian Church, also known as the Indian Orthodox Church, 
            is an autocephalous Oriental Orthodox church headquartered in Kerala, India. 
            The church traces its origins to the evangelical activity of St. Thomas the Apostle, 
            who is believed to have arrived in India in AD 52.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Apostolic Foundation</h2>
          <p className="text-gray-700 dark:text-gray-300">
            According to tradition, St. Thomas established seven churches in Kerala and 
            converted several Brahmin families. The church maintains the faith and traditions 
            of the early Christian church, while incorporating the rich cultural heritage of India.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Modern Era</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Today, the Malankara Orthodox Syrian Church continues to grow both in India and 
            globally, maintaining its unique identity while adapting to contemporary challenges. 
            The church places strong emphasis on preserving its liturgical traditions, 
            theological education, and social service.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Beliefs</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Apostolic succession through St. Thomas</li>
            <li>Orthodox faith and traditions</li>
            <li>Seven holy sacraments</li>
            <li>Importance of liturgical worship</li>
            <li>Veneration of saints and martyrs</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MalankaraPage;