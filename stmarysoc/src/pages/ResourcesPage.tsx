import React from 'react';
import { Download, ExternalLink, FileText, BookOpen, Video, Music, CalendarDays } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ResourcePage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Resources"
        subtitle="Materials to help you grow in faith"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
              We provide a variety of resources to help you grow in your Orthodox faith, including
              prayer books, liturgical texts, educational materials, and more.
            </p>

            <div className="space-y-12">
              {/* Liturgical Resources */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <BookOpen className="h-7 w-7 mr-3 text-blue-700 dark:text-blue-400" />
                  Liturgical Resources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-3">
                      Holy Qurbana Text
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      The complete text of the Divine Liturgy in English and Malayalam.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download PDF
                    </a>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-3">
                      Liturgical Calendar 2024
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Annual calendar with feast days and fasting periods.
                    </p>
                    <a 
                      href="#"
                      className="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Calendar
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Educational Materials */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FileText className="h-7 w-7 mr-3 text-blue-700 dark:text-blue-400" />
                  Educational Materials
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-3">
                      Sunday School Curriculum
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Educational materials for Sunday School teachers and students.
                    </p>
                    <div className="space-y-2">
                      <a 
                        href="#"
                        className="block text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <div className="flex items-center">
                          <Download className="h-5 w-5 mr-2" />
                          Pre-K & Kindergarten Materials
                        </div>
                      </a>
                      <a 
                        href="#"
                        className="block text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <div className="flex items-center">
                          <Download className="h-5 w-5 mr-2" />
                          Grades 1-5 Materials
                        </div>
                      </a>
                      <a 
                        href="#"
                        className="block text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <div className="flex items-center">
                          <Download className="h-5 w-5 mr-2" />
                          Grades 6-12 Materials
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-3">
                      Orthodox Faith Study Guide
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Introduction to Orthodox theology, history, and practices.
                    </p>
                    <a 
                      href="#"
                      className="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Study Guide
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Multimedia */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Video className="h-7 w-7 mr-3 text-blue-700 dark:text-blue-400" />
                  Multimedia Resources
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-3">
                      Liturgical Chants & Hymns
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Audio recordings of traditional Orthodox chants and hymns.
                    </p>
                    <div className="space-y-2">
                      <a 
                        href="#"
                        className="block text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <div className="flex items-center">
                          <Music className="h-5 w-5 mr-2" />
                          Holy Qurbana Chants
                        </div>
                      </a>
                      <a 
                        href="#"
                        className="block text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <div className="flex items-center">
                          <Music className="h-5 w-5 mr-2" />
                          Feast Day Hymns
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-3">
                      Sermon Archive
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Recorded sermons and spiritual talks.
                    </p>
                    <a 
                      href="#"
                      className="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Visit Sermon Archive
                    </a>
                  </div>
                </div>
              </div>
              
              {/* External Links */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <ExternalLink className="h-7 w-7 mr-3 text-blue-700 dark:text-blue-400" />
                  External Resources
                </h2>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <ul className="space-y-4">
                    <li>
                      <a 
                        href="https://mosc.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <ExternalLink className="h-5 w-5 mr-3 mt-0.5" />
                        <div>
                          <span className="block font-semibold">Malankara Orthodox Syrian Church</span>
                          <span className="text-gray-600 dark:text-gray-400">Official website of the Malankara Orthodox Syrian Church</span>
                        </div>
                      </a>
                    </li>
                    
                    <li>
                      <a 
                        href="https://coc-canada.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <ExternalLink className="h-5 w-5 mr-3 mt-0.5" />
                        <div>
                          <span className="block font-semibold">Diocese of Canada</span>
                          <span className="text-gray-600 dark:text-gray-400">Website of the Orthodox Diocese of Canada</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Church Calendar */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <CalendarDays className="h-7 w-7 mr-3 text-blue-700 dark:text-blue-400" />
                  Church Calendar
                </h2>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="aspect-[16/9] rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <iframe
                      src="https://calendar.google.com/calendar/embed?src=en.orthodox%23holiday%40group.v.calendar.google.com&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&mode=AGENDA&height=600"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Orthodox Church Calendar"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
                    This calendar shows major Orthodox Christian feast days and holidays. You can subscribe to this calendar 
                    to stay updated with important dates in the Orthodox Christian calendar.
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

export default ResourcePage;