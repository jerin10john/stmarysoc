import React from 'react';
import { Download, ExternalLink, FileText, BookOpen, CalendarDays } from 'lucide-react';
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
              
              {/* Living Bread App */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FileText className="h-7 w-7 mr-3 text-blue-700 dark:text-blue-400" />
                  Living Bread App
                </h2>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-3">
                    Download the Living Bread App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Access prayers, liturgy texts, and spiritual resources on your mobile device with the Living Bread app.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://apps.apple.com/ca/app/lrd/id1469981420"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
                    >
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3053 12.3912C16.3271 10.1632 17.6954 8.47453 19.9489 7.64651C18.8802 6.13019 17.2221 5.28571 15.0679 5.13591C13.0323 4.99265 10.8167 6.33778 9.97725 6.33778C9.0905 6.33778 7.17604 5.17868 5.64297 5.17868C2.91233 5.22798 0 7.38042 0 11.7731C0 13.2881 0.302971 14.8545 0.908913 16.4722C1.71693 18.5955 4.22182 23.2476 6.84267 23.1727C8.2563 23.1342 9.25846 22.2285 11.1346 22.2285C12.9631 22.2285 13.8979 23.1727 15.445 23.1727C18.0919 23.1342 20.353 18.91 21.1225 16.7834C17.4984 14.9618 16.3053 12.4296 16.3053 12.3912Z" />
                        <path d="M13.3402 3.89452C14.3163 2.73542 14.9338 1.22563 14.7851 0C13.4514 0.0768532 11.8478 0.903324 10.8347 2.00139C9.90501 3.01363 9.17969 4.53866 9.34702 5.71522C10.7904 5.82618 12.3236 5.0533 13.3402 3.89452Z" />
                      </svg>
                      Download for iOS
                    </a>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.rightmovesolutions.lrd&pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                    >
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.32952 0.539734C1.06264 0.822262 0.916016 1.24236 0.916016 1.79393V22.0431C0.916016 22.5947 1.06264 23.0148 1.32952 23.2973L1.38809 23.3559L12.3392 12.4048V12.348V12.2913L1.38809 1.34013L1.32952 0.539734Z" />
                        <path d="M16.0871 16.1527L12.3392 12.4048V12.348V12.2913L16.0871 8.54339L16.1457 8.5727L20.5926 11.0764C21.905 11.8359 21.905 13.0035 20.5926 13.7629L16.1457 16.2666L16.0871 16.1527Z" />
                        <path d="M16.1457 16.2666L12.3392 12.4601L1.32952 23.4112C1.77962 23.8902 2.50765 23.9495 3.35281 23.4698L16.1457 16.2666Z" />
                        <path d="M16.1457 8.57269L3.35281 1.36946C2.50765 0.889788 1.77962 0.949022 1.32952 1.42807L12.3392 12.3792L16.1457 8.57269Z" />
                      </svg>
                      Download for Android
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
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-3">
                    Talmido Orthodox Study Resources
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Access comprehensive Orthodox Christian study materials, courses, and educational resources.
                  </p>
                  <a 
                    href="https://talmido.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-700 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Visit Talmido.org
                  </a>
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
                      src="https://calendar.google.com/calendar/embed?src=920105749d841ed684841b6dc6887f392bc005d64095c49a0583337da62bdbd4%40group.calendar.google.com&ctz=America%2FToronto"
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