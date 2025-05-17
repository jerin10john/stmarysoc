import React from 'react';
import PageHeader from '../../components/PageHeader';
import UserConnectionCard from '../../components/UserConnectionCard';

const SaintsPage: React.FC = () => {
  const saints = [
    {
      name: "St. Mary",
      image: "/images/stMary.jpg",
      description: "The Theotokos and the mother of Jesus Christ."
    },
    {
      name: "St. Thomas",
      image: "/images/stThomas.jpg",
      description: "The Apostle who brought Christianity to India."
    },
    {
      name: "Parumala Thirumeni",
      image: "/images/StGregorious.jpg",
      description: "St. Gregorios of Parumala, the first canonized saint from India."
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Saints" 
        subtitle="The holy men and women who inspire our faith"
        bgImage="/images/stMary.jpg"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              In the Orthodox tradition, saints are venerated as examples of holiness and as intercessors who pray for us. 
              They inspire us to live virtuous lives and remind us of God's grace working in human lives.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              The saints pictured below hold special significance for our church and our Orthodox tradition. We commemorate 
              them on their feast days and ask for their prayers in our liturgical services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {saints.map((saint) => (
              <UserConnectionCard 
                key={saint.name}
                name={saint.name}
                title={saint.description || ""}
                image={saint.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaintsPage;