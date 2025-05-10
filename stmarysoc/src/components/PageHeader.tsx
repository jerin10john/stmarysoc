import React from 'react';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  bgImage?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, bgImage }) => {
  return (
    <div 
      className={`relative py-16 md:py-24 ${
        bgImage ? '' : 'bg-gradient-to-r from-blue-900/80 to-purple-900/80'
      }`}
    >
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </div>
  );
};

export default PageHeader;