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
                      src="/images/VeenethAchan.jpg" 
                      alt="Rev. Fr. Vineeth Vattakunnel Kurian" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rev. Fr. Vineeth Vattakunnel Kurian</h2>
                  
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Meet Fr. Vineeth Vattakunnel Kurian, the Vicar of St. John's Malankara Orthodox Syrian Church in Hamilton. 
                      He comes from the ancient Vattakunnel Family in Kottayam that has nurtured and protected the rich heritage 
                      of Christian ideals and principles for many decades, with 28 priests having been ordained from the family. 
                      Fr. Vineeth is the 29th priest from this family, and his parents are Vattakunnel Abraham Kurian and 
                      Mariamma Kurian from the Kallooparambil family in Manarcadu, Kottayam.
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Fr. Vineeth began his journey of serving at the altar in 2003 at the age of 14 through the laying of hands 
                      by H.G Abraham Mar Severios Metropolitan at his home parish, Kottayam Mar Elia Cathedral. After his graduation, 
                      he completed his pre-seminary period blessedly under the tutelage and discipleship of HH Baselios Marthoma 
                      Didymos I and HH Baselios Marthoma Paulose II at Devalokam Catholicate Aramana from 2010-2012. He was ordained 
                      as a Sub Deacon (Yaupadiyakno) on 21st May 2015 by His Holiness Baselios Marthoma Paulose II after his 
                      graduation from the Orthodox Theological Seminary in Kottayam. His Deacon (Shemshono) ordination was held at 
                      Mar Augen Ashramam (Prathyaasha Bavan, Kandanadu) chapel on 11 Dec 2016 by H.G Dr. Mathews Mar Severios 
                      Metropolitan of Kandanadu west Diocese (later HH Baselios Marthoma Mathews III). He was called to the 
                      priesthood with the laying of hands by HH Baselios Marthoma Paulose II on Saturday, 07 June 2017, at his 
                      home parish.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Contact Information</h3>
                    <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
                      <li>Email: stmarysmosckw@gmail.com</li>
                      <li>Phone: (647) 936-7744</li>
                      <li>Office Hours: By appointment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Video Section - Full Width */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Message from Our Vicar</h3>
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/-dx6md-x0KE"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title="Message from Our Vicar"
                    className="w-full h-full"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Watch a special message from our Vicar about our church community and spiritual journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VicarPage;