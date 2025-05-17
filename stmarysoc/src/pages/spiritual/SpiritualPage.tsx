import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, School, Heart, Lightbulb } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const SpiritualPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Spiritual Organizations" 
        subtitle="Growing in faith and service through our church community"
        bgImage="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              St. Mary's Malankara Orthodox Syrian Congregation is home to several vibrant spiritual organizations
              that foster growth in faith, leadership, and service. These organizations provide avenues for
              members of all ages to deepen their understanding of Orthodox traditions and actively 
              participate in the life of the church.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Each organization has its own unique mission and focus, yet all work together to build 
              up our community in Christ. We invite you to learn more about these organizations and consider
              becoming involved in their activities and ministries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center pt-8 pb-4">
                <Users className="h-20 w-20 text-blue-700 dark:text-blue-400" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3">
                  MMVS
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Marth Mariam Vanitha Samajam serves as the Women's wing of the Malankara Orthodox Church, 
                  uniting female members across parishes. Following the motto of 'pray, act, and shine', 
                  MMVS fosters spiritual growth and empowers women through various initiatives.
                </p>
                <Link 
                  to="/spiritual/mmvs" 
                  className="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Learn more about MMVS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center pt-8 pb-4">
                <School className="h-20 w-20 text-blue-700 dark:text-blue-400" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3">
                  Sunday School
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our Sunday School takes care of the spiritual nurturing of children by bringing them up in the 
                  knowledge and fellowship of Jesus Christ and His Church. The program provides age-appropriate 
                  religious education and activities that foster faith and fellowship.
                </p>
                <Link 
                  to="/spiritual/sunday-school" 
                  className="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Learn more about Sunday School
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center pt-8 pb-4">
                <Heart className="h-20 w-20 text-blue-700 dark:text-blue-400" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3">
                  OCYM
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  The Orthodox Christian Youth Movement (OCYM) serves as the vibrant youth wing of our church. 
                  Following a three-fold path of worship, study, and service, OCYM engages young adults in 
                  spiritual growth and community service opportunities.
                </p>
                <Link 
                  to="/spiritual/ocym" 
                  className="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Learn more about OCYM
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center mb-12">
            <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Get Involved
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              We encourage all members of our church to actively participate in these spiritual organizations.
              Through your involvement, you can grow in faith, develop leadership skills, and make meaningful 
              contributions to our church community.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us to Join
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Benefits of Participation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <Users className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community Fellowship</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Build lasting friendships with others who share your faith and values.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <Lightbulb className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Spiritual Growth</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Deepen your understanding of Orthodox faith and traditions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <Heart className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Service Opportunities</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Put your faith into action by serving the church and the broader community.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <School className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Leadership Development</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Develop leadership skills that benefit both church life and professional growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpiritualPage;