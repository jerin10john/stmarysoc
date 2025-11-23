import React from "react";
import PageHeader from "../../components/PageHeader";

const PatronSaintPage = () => {
  return (
    <div>
      <div className="w-full">
        <PageHeader
          title="St. Mary - Our Patron Saint"
          subtitle="The Theotokos and Ever-Virgin Mary"
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
                      src="/images/stMary.jpg"
                      alt="St. Mary - Our Patron Saint"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Patron Saint
                  </h2>

                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      St. Mary, the mother of Jesus Christ, is our church's
                      patron saint. In the Orthodox tradition, she is venerated
                      as the Theotokos (Greek for "God-bearer") and Ever-Virgin
                      Mary.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Her life of faith, humility, and obedience to God's will
                      serves as an inspiration to all members of our
                      congregation. We seek her intercession and strive to
                      follow her example.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Content - Full Width */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Significance in Orthodox Tradition
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  St. Mary holds a place of honor in Orthodox Christianity as
                  the Theotokos, the one who gave birth to God in the flesh. Her
                  willingness to accept God's plan, as expressed in her response
                  to the Angel Gabriel, "Let it be to me according to your
                  word," demonstrates perfect faith and obedience.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  In the Orthodox Church, we venerate St. Mary as the foremost
                  among saints, and her intercession is sought in many prayers.
                  The Magnificat, her song of praise recorded in Luke's Gospel,
                  is a regular part of Orthodox worship.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Feast Days
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our church celebrates several feast days dedicated to St. Mary
                  throughout the liturgical year:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
                  <li>Feast of St. Mary for Seeds (January 15)</li>
                  <li>Feast of St. Mary for Crops (May 15)</li>
                  <li>The Annunciation (March 25)</li>
                  <li>The Dormition (August 15)</li>
                  <li>The Presentation of the Theotokos (November 21)</li>
                  
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Icons of the Theotokos
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Icons of the Theotokos have a special place in Orthodox
                  worship and personal devotion. These sacred images depict St.
                  Mary with Christ, emphasizing the Incarnation and her role in
                  salvation history. In our church, we have several icons of the
                  Theotokos that are venerated during services.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                  Prayers to St. Mary
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  One of the most common prayers to the Theotokos in the
                  Orthodox tradition is:
                </p>
                <blockquote className="my-6 px-4 py-2 border-l-4 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                  "Peace be with you, Mary full of grace, the Lord is with thee.
                  Blessed are thou amongst women, and blessed is the fruit of thy
                  womb..."
                </blockquote>
                <p className="text-gray-600 dark:text-gray-300">
                  This prayer reminds us of St. Mary's unique role in the salvation
                  history and invites her intercession in our lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatronSaintPage;
