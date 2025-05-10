import React from 'react';
import PageHeader from '../../components/PageHeader';

const PatronSaintPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="St. Mary - Our Patron Saint" 
        subtitle="The Theotokos and Ever-Virgin Mary"
        bgImage="https://images.pexels.com/photos/208372/pexels-photo-208372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/4604596/pexels-photo-4604596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="St. Mary" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                  Our Patron Saint
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  St. Mary, the mother of Jesus Christ, is our church's patron saint. In the Orthodox tradition, 
                  she is venerated as the Theotokos (Greek for "God-bearer") and Ever-Virgin Mary.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Her life of faith, humility, and obedience to God's will serves as an inspiration to all 
                  members of our congregation. We seek her intercession and strive to follow her example.
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3>Significance in Orthodox Tradition</h3>
              <p>
                St. Mary holds a place of honor in Orthodox Christianity as the Theotokos, the one who gave birth 
                to God in the flesh. Her willingness to accept God's plan, as expressed in her response to the 
                Angel Gabriel, "Let it be to me according to your word," demonstrates perfect faith and obedience.
              </p>
              
              <p>
                In the Orthodox Church, we venerate St. Mary as the foremost among saints, and her intercession 
                is sought in many prayers. The Magnificat, her song of praise recorded in Luke's Gospel, is a 
                regular part of Orthodox worship.
              </p>
              
              <h3>Feast Days</h3>
              <p>
                Our church celebrates several feast days dedicated to St. Mary throughout the liturgical year:
              </p>
              
              <ul>
                <li>The Nativity of the Theotokos (September 8)</li>
                <li>The Presentation of the Theotokos (November 21)</li>
                <li>The Annunciation (March 25)</li>
                <li>The Dormition (August 15)</li>
              </ul>
              
              <h3>Icons of the Theotokos</h3>
              <p>
                Icons of the Theotokos have a special place in Orthodox worship and personal devotion. These 
                sacred images depict St. Mary with Christ, emphasizing the Incarnation and her role in salvation 
                history. In our church, we have several icons of the Theotokos that are venerated during services.
              </p>
              
              <h3>Prayers to St. Mary</h3>
              <p>
                One of the most common prayers to the Theotokos in the Orthodox tradition is:
              </p>
              
              <blockquote>
                "O Virgin Theotokos, rejoice, O Mary full of grace, the Lord is with you. Blessed are you among women, 
                and blessed is the fruit of your womb, for you have borne the Savior of our souls."
              </blockquote>
              
              <p>
                This prayer reminds us of St. Mary's unique role in salvation history and invites her intercession 
                in our lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatronSaintPage;