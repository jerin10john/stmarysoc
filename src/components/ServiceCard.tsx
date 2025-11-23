import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  time: string;
  day?: string;
  description?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, time, day, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-4px] duration-300">
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
        
        <div className="flex items-start mb-4">
          <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-2" />
          <div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">{time}</p>
            {day && (
              <div className="flex items-center mt-1 text-gray-600 dark:text-gray-400">
                <CalendarDays className="h-4 w-4 mr-1" />
                <span>{day}</span>
              </div>
            )}
          </div>
        </div>
        
        {description && (
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;