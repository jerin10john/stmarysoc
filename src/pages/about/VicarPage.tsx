import React from 'react';
import PageHeader from '../../components/PageHeader';

const VicarPage = () => {
  return (
    <div>
      <div className="w-full">
        <PageHeader 
          title="Our Vicar" 
          subtitle="Learn about our spiritual leader and guide"
        />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Image Section */}
                <div className="md:w-1/3">
                  <div className="aspect-w-3 aspect-h-4">
                    <img 
                      src="/images/ThomasAchan.jpg" 
                      alt="Rev. Fr. Dr. Thomas George" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rev. Fr. Dr. Thomas George</h2>
                  
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Rev. Fr. Dr. Thomas George is the youngest among the four children of Mr. K. M. George and Mrs. Saramma George, Kavil House, Chungathara, Nilambur, Malappuram District, Kerala. Achen is a member of St.George Orthodox Valiapally, Chungathara of Malabar diocese. After the completion of bachelor’s degree in science from Calicut University, he joined Orthodox theological Seminary Kottayam for theological studies. From there he took graduation in sacred theology (GST) and the Bachelor of Divinity (BD). Achen then completed MSW degree from Bharathiar University Coimbatore, MSc (Psychology) degree from Madras University Chennai and earned his PhD in psychology from Sree Sankaracharya University Kalady Kerala.
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Achen and his wife (Kochamma), Ancy Thomas, currently reside in Brampton, Ontario. They are blessed with two children. Their daughter, Kripa, is married to Mr. Basil George, a member of St. Gregorios Orthodox Church in Tampa, Florida, and they have a daughter named Alaiya. Their son, Gregory, has completed his studies and is presently residing with Achen and Kochamma.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Rev. Fr. Dr. Thomas George was called to serve in the Holy altar at the age of thirteen by late lamented H.H Baselios Marthoma Didymos I, while H.H was serving as the Metropolitan of Malabar Diocese. His Holiness ordained Rev. Fr.Dr. Thomas George as sub-deacon (5th June 1990), deacon (6th Mar 1993), Priest (25th March 1993) and appointed as the Vicar of St. Gregorios Orthodox Church of Toronto, in June 2006. Rev. Fr. Dr. Thomas George has been proudly serving as Vicar of various parishes including St. George Orthodox Cathedral, Kozhikode under the Malabar Diocese of the Indian Orthodox Church since his ordination as a priest in 1993.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      As of November 16th, 2025, Achen has been appointed as the vicar of our Congregation - St. Mary’s Malankara Orthodox Syrian Congregation, Kitchener. Achen is also the vicar of St. Thomas Orthodox Church, Toronto since December 1st, 2016, and the Diocesan Secretary (Diocese of Canada) since October 11, 2025.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Contact Information</h3>
                    <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
                      <li>Email: <a href="mailto:frthomasgeorge@yahoo.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">frthomasgeorge@yahoo.com</a></li>
                      <li>Phone: <a href="tel:6474490590" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">647-449-0590</a></li>
                      <li>Office Hours: By appointment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VicarPage;
