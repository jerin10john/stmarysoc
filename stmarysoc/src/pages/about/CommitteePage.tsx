import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import UserConnectionCard from '../../components/UserConnectionCard';

// Define the data structure for committee members
interface CommitteeMember {
  name: string;
  title: string;
  image: string;
  isConnecting?: boolean;
}

const CommitteePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Add a small delay to ensure smooth transition after page renders
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Leadership (executive committee)
  const leadership: CommitteeMember[] = [
    {
      name: 'Rev. Fr. Vineeth V. Kurian',
      title: 'President',
      image: '/images/VeenethAchan.jpg'
    },
    {
      name: 'Mr. Yohannan Danial',
      title: 'Secretary',
      image: 'https://via.placeholder.com/300x400?text=Yohannan+Danial'
    },
    {
      name: 'Mr. Jose K. Thelapuram',
      title: 'Trustee',
      image: 'https://via.placeholder.com/300x400?text=Jose+K+Thelapuram'
    }
  ];

  // Committee members
  const committeeMembers: CommitteeMember[] = [
    {
      name: 'Ms. Angel Mathew',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Angel+Mathew'
    },
    {
      name: 'Ms. Bini Thomas',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Bini+Thomas'
    },
    {
      name: 'Mr. Cyril Philipose',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Cyril+Philipose'
    },
    {
      name: 'Mr. John Koshy',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=John+Koshy'
    },
    {
      name: 'Mr. Linto Mathew',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Linto+Mathew'
    },
    {
      name: 'Mr. Shynu John',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Shynu+John'
    },
    {
      name: 'Mr. Subish K. Mathew',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Subish+K+Mathew'
    }
  ];

  // Special positions
  const specialPositions: CommitteeMember[] = [];

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className={`transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <PageHeader 
          title="Church Committee" 
          subtitle="Meet the dedicated team serving St. Mary's Malankara Orthodox Syrian Congregation"
        />

      <section className={`mb-16 transition-all duration-700 ease-in-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
        <h2 className="text-2xl font-serif font-bold text-center mb-10 text-gray-800 dark:text-white">
          Executive Committee
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leadership.map((leader, index) => (
            <UserConnectionCard 
              key={index}
              name={leader.name}
              title={leader.title}
              image={leader.image}
            />
          ))}
        </div>
      </section>

      <section className={`mb-16 transition-all duration-700 ease-in-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
        <h2 className="text-2xl font-serif font-bold text-center mb-10 text-gray-800 dark:text-white">
          Committee Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {committeeMembers.map((member, index) => (
            <UserConnectionCard 
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </section>

      {/* Special positions section removed as per updated committee structure */}
      </div>
    </div>
  );
};

export default CommitteePage;