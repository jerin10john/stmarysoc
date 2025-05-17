import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { Users, BookOpen, Lightbulb, Heart } from 'lucide-react';

function OCYMPage() {
  return (
    <div className="font-inter">
      <PageHeader
        title="Orthodox Christian Youth Movement (OCYM)"
        subtitle="The vibrant youth wing of the Malankara Orthodox Syrian Church"
        bgImage="https://images.pexels.com/photos/208372/pexels-photo-208372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-normal">
                The Orthodox Christian Youth Movement (OCYM) serves as the vibrant youth wing of the Malankara Orthodox 
                Syrian Church. Devoted to fostering the well-being and advancement of both the Church and the community, 
                OCYM diligently follows a three-fold path of worship, study, and service. Guided by the vicars, numerous 
                activities take place at both diocesan and church levels, aiming to inspire students to channel their 
                talents and skills towards mutual support, love, and the glorification of God.
              </p>
            </div>

            {/* Key Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <div className="rounded-full bg-maroon-50 dark:bg-maroon-900/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-maroon-700 dark:text-maroon-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Three-Fold Mission</h3>
                <p className="text-gray-600 dark:text-gray-400 font-normal">
                  OCYM, as the youth wing of the Malankara Orthodox Syrian Church, embraces a three-fold path of worship, 
                  study, and service, contributing to the overall goodness and progress of the Church and community.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <div className="rounded-full bg-maroon-50 dark:bg-maroon-900/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-maroon-700 dark:text-maroon-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Guided Activities</h3>
                <p className="text-gray-600 dark:text-gray-400 font-normal">
                  Under the guidance of vicar, OCYM organizes a variety of intellectual and fun activities at both 
                  diocesan and church levels, creating opportunities for students to utilize their talents and skills 
                  to foster mutual support, love, and the glorification of God.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <div className="rounded-full bg-maroon-50 dark:bg-maroon-900/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-maroon-700 dark:text-maroon-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Empower Community</h3>
                <p className="text-gray-600 dark:text-gray-400 font-normal">
                  OCYM arrange sessions focused on the study of faith, organize retreats, conventions, fundraising 
                  activities, charity programs and various other events.
                </p>
              </div>
            </div>

            {/* Join Section */}
            <div className="bg-maroon-50 dark:bg-maroon-900/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                Join Our Youth Movement
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-normal">
                Be part of our mission to worship, study, and serve. Together, we can make a difference in our 
                community through faith, fellowship, and service.
              </p>
              <Link 
                to="/contact"
                className="inline-block px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md shadow-lg transition-all hover:shadow-xl"
              >
                Contact Us to Join
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OCYMPage;