import React from 'react';

type SaintCardProps = {
  name: string;
  image: string;
  description?: string;
};

const SaintCard: React.FC<SaintCardProps> = ({ name, image, description }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
        {description && <p className="text-gray-600 dark:text-gray-400">{description}</p>}
      </div>
    </div>
  );
};

export default SaintCard;