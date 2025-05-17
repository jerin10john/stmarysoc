import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { BookOpen, Users, Lightbulb, Heart } from 'lucide-react';

function SundaySchoolPage() {
  return (
    <div className="font-inter">
      <PageHeader 
        title="Sunday School" 
        subtitle="Nurturing young minds in faith and fellowship"
        bgImage="https://images.pexels.com/photos/208372/pexels-photo-208372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-normal">
                Education program typically held on Sundays, primarily for children and teenagers. It helps young 
                individuals gather to learn about the principles, teachings, and stories of christian faith. This is 
                a spiritual organisation functioning in all the parishes of the Orthodox Church throughout the world. 
                It takes care of the spiritual nurturing of the children, by bringing them up in the knowledge and 
                fellowship of Jesus Christ and His Church.
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300 font-normal">
                The Sunday School holds a pivotal role as a significant Spiritual Organization within our church 
                community. Its primary objective is to foster the spiritual development of our children, ensuring 
                they do not lag behind in their upbringing. Recognizing that spiritual growth is a lifelong journey, 
                the Sunday School serves as a foundational platform for successful integration into various spiritual 
                activities, ultimately shaping each individual into an exemplary Christian.
              </p>
            </div>

            {/* Key Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <div className="rounded-full bg-maroon-50 dark:bg-maroon-900/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-maroon-700 dark:text-maroon-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Tailored Classes</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-normal">
                  The Sunday School is structured into classes, organized according to age groups, and each group 
                  adheres to a specific curriculum designed for each year. Our academic year spans from February to 
                  November, culminating in annual exams at the conclusion of each year.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <div className="rounded-full bg-maroon-50 dark:bg-maroon-900/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-maroon-700 dark:text-maroon-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Experienced Teachers</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-normal">
                  Our Sunday School is blessed with a dedicated team of experienced teachers who bring passion, 
                  wisdom, and a wealth of spiritual knowledge to the classrooms. These seasoned educators play a 
                  crucial role in guiding our students on their spiritual journey.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
                <div className="rounded-full bg-maroon-50 dark:bg-maroon-900/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-maroon-700 dark:text-maroon-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Learning with Fun</h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-normal">
                  Our innovative approach combines valuable lessons with interactive activities, ensuring that learning 
                  is not only educational but also fun. Through games, storytelling, and creative projects, we strive 
                  to create a lively and enjoyable atmosphere that captivates young minds.
                </p>
              </div>
            </div>

            {/* Join Section */}
            <div className="bg-maroon-50 dark:bg-maroon-900/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                Join Our Sunday School
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-normal">
                Give your children the gift of spiritual education in a nurturing and engaging environment. 
                Together, we can help them grow in faith and wisdom.
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

export default SundaySchoolPage;