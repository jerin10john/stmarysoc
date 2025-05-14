import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, History, Users, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { ChurchDome } from '../../components/ChurchSvg';

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="About Our Church" 
        subtitle="Serving the faithful in the Orthodox tradition since 2017" 
        bgImage="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-10">
              <ChurchDome className="w-24 h-24 text-blue-700 dark:text-blue-400" />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
              <p className="lead">
                St. Mary's Malankara Orthodox Syrian Congregation has been serving the faithful since 2017. 
                Rooted in the teachings of Christ and the Orthodox tradition, we are committed to spiritual 
                growth and community service.
              </p>
              
              <p>
                Our congregation follows the West Syrian Rite and is part of the Malankara Orthodox Syrian Church, 
                one of the Oriental Orthodox churches. We maintain the ancient traditions and liturgical practices 
                that have been passed down through generations, while also addressing the needs of our modern community.
              </p>
              
              <p>
                Our church is committed to providing spiritual guidance, fostering community bonds, and serving 
                those in need. We welcome all who seek to deepen their relationship with God through the rich 
                traditions of Orthodox Christianity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <History className="h-8 w-8 text-blue-700 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-2">Our History</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Founded in 2017, our parish has grown from a small group of families to a thriving congregation.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CalendarDays className="h-8 w-8 text-blue-700 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-2">Services</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We hold regular Holy Qurbana services every Saturday and special services for feast days.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-700 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our diverse congregation includes families from various backgrounds united in Orthodox faith.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 mb-16">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To provide a spiritual home for Orthodox Christians, to nurture faith through worship, education, 
                fellowship, and service, and to share the Good News of Jesus Christ with all people.
              </p>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be a vibrant Orthodox Christian community that welcomes all, worships God in spirit and truth, 
                serves others with love and compassion, and bears witness to the light of Christ in the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-4">
                    Location
                  </h3>
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-3 mt-1" />
                    <address className="not-italic text-gray-600 dark:text-gray-300">
                      121 Westmount Road East<br />
                      Kitchener, ON, N2M 4Y6
                    </address>
                  </div>
                  <div className="aspect-video rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.1234567890123!2d-80.456789!3d43.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf6ad02edccff%3A0xdd9df3e0e6a37f5c!2s121%20Westmount%20Rd%20E%2C%20Kitchener%2C%20ON%20N2M%204Y6!5e0!3m2!1sen!2sca!4v1234567890!5m2!1sen!2sca"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="St. Mary's Orthodox Church Location"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-4">
                    Service Schedule
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CalendarDays className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">Holy Qurbana</p>
                        <p className="text-gray-600 dark:text-gray-300">Every Saturday at 8:30 AM</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CalendarDays className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">Sunday School</p>
                        <p className="text-gray-600 dark:text-gray-300">Every Saturday after Holy Qurbana</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CalendarDays className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">Prayer Meetings</p>
                        <p className="text-gray-600 dark:text-gray-300">Once every quarter</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link 
                to="/about/saints" 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-serif font-semibold text-gray-900 dark:text-white mb-2">Saints</h3>
                <ArrowRight className="h-5 w-5 text-blue-700 dark:text-blue-400 mx-auto" />
              </Link>
              
              <Link 
                to="/about/patron-saint" 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-serif font-semibold text-gray-900 dark:text-white mb-2">Patron Saint</h3>
                <ArrowRight className="h-5 w-5 text-blue-700 dark:text-blue-400 mx-auto" />
              </Link>
              
              <Link 
                to="/about/malankara" 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-serif font-semibold text-gray-900 dark:text-white mb-2">Malankara</h3>
                <ArrowRight className="h-5 w-5 text-blue-700 dark:text-blue-400 mx-auto" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;