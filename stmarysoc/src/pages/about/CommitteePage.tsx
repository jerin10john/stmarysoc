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
      name: 'Roy Jacob',
      title: 'Treasurer',
      image: 'https://via.placeholder.com/300x400?text=Roy+Jacob'
    },
    {
      name: 'Jerry Manayath Rajan',
      title: 'Secretary',
      image: 'https://via.placeholder.com/300x400?text=Jerry+Manayath+Rajan'
    }
  ];

  // Committee members
  const committeeMembers: CommitteeMember[] = [
    {
      name: 'Issac Johnson',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Issac+Johnson'
    },
    {
      name: 'Jibin John Cherian',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Jibin+John+Cherian'
    },
    {
      name: 'Tisha Anna Simon',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Tisha+Anna+Simon'
    },
    {
      name: 'Shine George Joseph',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Shine+George+Joseph'
    },
    {
      name: 'Babuji Philip',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Babuji+Philip'
    },
    {
      name: 'James Samuel',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=James+Samuel'
    },
    {
      name: 'Sam Kurian',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Sam+Kurian'
    },
    {
      name: 'Jitin George',
      title: 'Committee Member',
      image: 'https://via.placeholder.com/300x400?text=Jitin+George'
    }
  ];

  // Special positions
  const specialPositions: CommitteeMember[] = [
    {
      name: 'Mithun Oommen',
      title: 'Ex-Officio',
      image: 'https://via.placeholder.com/300x400?text=Mithun+Oommen'
    },
    {
      name: 'Selin Philip',
      title: 'Internal Auditor',
      image: 'https://via.placeholder.com/300x400?text=Selin+Philip'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className={`transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <PageHeader 
          title="Church Committee" 
          subtitle="Meet the dedicated team serving St. Mary's Orthodox Syrian Church"
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

      <section className={`mb-16 transition-all duration-700 ease-in-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
        <h2 className="text-2xl font-serif font-bold text-center mb-10 text-gray-800 dark:text-white">
          Special Positions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {specialPositions.map((member, index) => (
            <UserConnectionCard 
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default CommitteePage;