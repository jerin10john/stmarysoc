import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Users, BookOpen, Lightbulb, Heart } from 'lucide-react';

function MMVSPage() {
  return (
    <div className="font-inter">
      <PageHeader
        title="Marth Mariam Vanitha Samajam (MMVS)"
        subtitle="The women's wing of the Malankara Orthodox Church"
        bgImage="https://images.pexels.com/photos/208372/pexels-photo-208372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-normal">
                Marth Mariam Vanitha Samajam serves as the Women's wing of the Malankara Orthodox Church of India, 
                uniting female members across all parishes worldwide in its 30 Dioceses. It is the major spiritual 
                organization of the church to nurture and empower women. This organization persistently upholds and 
                embodies its motto of 'pray, act, and shine' in every aspect of its existence.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-normal">
                Established in 1928 under the guidance of the Late Very Rev. M.C. Kuriakose Ramban and led by 
                K.M. Annamma and co-workers, the organization is dedicated to the spiritual progress of women, 
                named after the Blessed Virgin Mary whom they recognize as their intercessory saint.
              </p>
            </div>

            {/* Key Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <div className="rounded-full bg-maroon-50 dark:bg-maroon-900/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-maroon-700 dark:text-maroon-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Enlighten Family</h3>
                <p className="text-gray-600 dark:text-gray-400 font-normal">
                  MMVS enlightens families by imparting spiritual teachings and values, fostering a deep understanding 
                  of faith. Through initiatives like 'Bible Study' and leadership training, the organization actively 
                  contributes to the spiritual enlightenment and growth of families within the community.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <div className="rounded-full bg-maroon-50 dark:bg-maroon-900/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-maroon-700 dark:text-maroon-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Enable Women</h3>
                <p className="text-gray-600 dark:text-gray-400 font-normal">
                  Actively conduct and engage in conferences, retreats, seminars, and related programs to enrich 
                  the lives of women.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <div className="rounded-full bg-maroon-50 dark:bg-maroon-900/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-maroon-700 dark:text-maroon-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Community Service</h3>
                <p className="text-gray-600 dark:text-gray-400 font-normal">
                  MMS actively engages in community service by leading and organizing fundraising efforts for various 
                  charities, providing essential support to those in need. Additionally, the organization promotes 
                  community well-being by offering teachings on faith and tradition.
                </p>
              </div>
            </div>

            {/* Join Section */}
            <div className="bg-maroon-50 dark:bg-maroon-900/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                Join Our Community
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-normal">
                Be part of our mission to pray, act, and shine in our community. Together, we can make a difference 
                in the lives of women and families through spiritual growth and service.
              </p>
              <button className="px-6 py-3 bg-maroon-700 hover:bg-maroon-800 text-white font-medium rounded-md shadow-lg transition-all hover:shadow-xl">
                Contact Us to Join
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MMVSPage;