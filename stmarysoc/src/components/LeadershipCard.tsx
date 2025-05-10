import React from 'react';

type LeadershipCardProps = {
  name: string;
  title: string;
  image: string;
  description?: string;
};

const LeadershipCard: React.FC<LeadershipCardProps> = ({ name, title, image, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-blue-700 dark:text-blue-400 font-medium mb-3">{title}</p>
        {description && <p className="text-gray-600 dark:text-gray-400">{description}</p>}
      </div>
    </div>
  );
};

export default LeadershipCard;