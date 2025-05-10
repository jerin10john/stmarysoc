import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, School, Heart } from 'lucide-react';
import { ChurchDome, CrossIcon } from '../components/ChurchSvg';
import ServiceCard from '../components/ServiceCard';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/208372/pexels-photo-208372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
            alt="Church Stained Glass" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <CrossIcon className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            St. Mary's Malankara Orthodox <br className="hidden md:block" /> Syrian Congregation
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Rooted in the teachings of Christ and the Orthodox tradition
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/about" 
              className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md shadow-lg transition-all hover:shadow-xl"
            >
              Learn More
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Church Interior" 
                  className="rounded-lg shadow-xl" 
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <ChurchDome className="w-16 h-16 text-blue-700 dark:text-blue-400" />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                About Our Church
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                St. Mary's Malankara Orthodox Syrian Congregation has been serving the faithful since 2017. 
                Rooted in the teachings of Christ and the Orthodox tradition, we are committed to spiritual 
                growth and community service.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center font-medium text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Learn more about our church
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Join us in worship and community through our regular services and special events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Holy Qurbana" 
              time="8:30 AM" 
              day="Every Saturday" 
              description="The Divine Liturgy of the Malankara Orthodox Syrian Church."
            />
            <ServiceCard 
              title="Sunday School" 
              time="After Holy Qurbana" 
              day="Every Saturday" 
              description="Religious education for children of all ages."
            />
            <ServiceCard 
              title="Prayer Meetings" 
              time="Varies" 
              day="Once every quarter" 
              description="Community prayer and fellowship."
            />
            <ServiceCard 
              title="Family Day" 
              time="5:00 PM - 9:00 PM" 
              day="17th May 2025" 
              description="Annual family gathering with food, games, and fellowship."
            />
            <ServiceCard 
              title="Special Services" 
              time="To be announced" 
              day="Major Feasts" 
              description="Special liturgical services for major feast days."
            />
            <ServiceCard 
              title="Passion Week" 
              time="Various times" 
              day="Holy Week" 
              description="Special services commemorating the passion of Christ."
            />
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Spiritual Organizations
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our church hosts several spiritual organizations that help members grow in faith and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-blue-700 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-2">MMVS</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Mar Gregorios Orthodox Christian Student Movement provides spiritual guidance to women in our community.
              </p>
              <Link 
                to="/spiritual/mmvs" 
                className="inline-flex items-center font-medium text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
              <School className="h-12 w-12 text-blue-700 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-2">Sunday School</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our Sunday School provides religious education for children of all ages, helping them grow in faith.
              </p>
              <Link 
                to="/spiritual/sunday-school" 
                className="inline-flex items-center font-medium text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
              <Heart className="h-12 w-12 text-blue-700 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-2">OCYM</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Orthodox Christian Youth Movement engages young adults in spiritual growth and community service.
              </p>
              <Link 
                to="/spiritual/ocym" 
                className="inline-flex items-center font-medium text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            We invite you to be a part of our vibrant church community. Come worship with us!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md shadow-lg transition-all hover:shadow-xl"
            >
              Contact Us
            </Link>
            <Link 
              to="/resources" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-lg transition-all hover:shadow-xl"
            >
              Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Mark your calendars for these special events and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6 flex gap-6 items-center">
                <div className="min-w-16 h-16 bg-blue-700 dark:bg-blue-800 text-white flex flex-col items-center justify-center rounded-md">
                  <span className="text-sm font-medium">MAY</span>
                  <span className="text-2xl font-bold">17</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white">Family Day</h3>
                  <p className="text-gray-600 dark:text-gray-400">5:00 PM - 9:00 PM</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Join us for a day of fellowship, food, and fun for the entire family.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6 flex gap-6 items-center">
                <div className="min-w-16 h-16 bg-blue-700 dark:bg-blue-800 text-white flex flex-col items-center justify-center rounded-md">
                  <span className="text-sm font-medium">APR</span>
                  <span className="text-2xl font-bold">12</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white">Passion Week Begins</h3>
                  <p className="text-gray-600 dark:text-gray-400">Various Times</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Special services commemorating the passion of Christ throughout Holy Week.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6 flex gap-6 items-center">
                <div className="min-w-16 h-16 bg-blue-700 dark:bg-blue-800 text-white flex flex-col items-center justify-center rounded-md">
                  <span className="text-sm font-medium">JUN</span>
                  <span className="text-2xl font-bold">30</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white">Community Prayer Meeting</h3>
                  <p className="text-gray-600 dark:text-gray-400">7:00 PM - 9:00 PM</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Quarterly community prayer meeting and fellowship.
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

export default HomePage;