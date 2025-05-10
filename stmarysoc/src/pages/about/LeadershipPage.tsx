import React from 'react';
import PageHeader from '../../components/PageHeader';
import LeadershipCard from '../../components/LeadershipCard';

const LeadershipPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Church Leadership" 
        subtitle="The hierarchical structure of our church"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              The Malankara Orthodox Syrian Church follows an episcopal structure with the Catholicos of the East 
              and Malankara Metropolitan as the primate. Our church leadership is organized in a hierarchical manner, 
              with bishops, priests, and lay leaders serving the faithful.
            </p>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8 text-center">
            Hierarchical Leadership
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <LeadershipCard 
              name="H.H. Moran Mar Baselios Marthoma Mathews III"
              title="Catholicos of the East and Malankara Metropolitan"
              image="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              description="His Holiness is the Supreme Head of the Malankara Orthodox Syrian Church, elected and consecrated in 2021."
            />
            
            <LeadershipCard 
              name="H. G. Zachariah Mar Nicholovos"
              title="Metropolitan - Diocese of Canada"
              image="https://images.pexels.com/photos/6646882/pexels-photo-6646882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              description="His Grace oversees the parishes in the Diocese of Canada, providing spiritual leadership and administrative guidance."
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8 text-center">
            Parish Leadership
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LeadershipCard 
              name="Fr. Thomas Chandy"
              title="Vicar"
              image="https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              description="Fr. Thomas leads our parish in spiritual matters, conducts services, and provides pastoral care."
            />
            
            <LeadershipCard 
              name="Mr. Joseph Philip"
              title="Secretary"
              image="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              description="Mr. Philip handles the administrative affairs of the parish and coordinates communication."
            />
            
            <LeadershipCard 
              name="Mr. George Thomas"
              title="Treasurer"
              image="https://images.pexels.com/photos/5792615/pexels-photo-5792615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              description="Mr. Thomas manages the financial matters of the parish with transparency and accountability."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;