import React from 'react';
import PageHeader from '../../components/PageHeader';
import SaintCard from '../../components/SaintCard';

const SaintsPage: React.FC = () => {
  const saints = [
    {
      name: "St. Mary",
      image: "https://images.pexels.com/photos/208372/pexels-photo-208372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "The Theotokos and the mother of Jesus Christ."
    },
    {
      name: "St. Thomas",
      image: "https://images.pexels.com/photos/2519317/pexels-photo-2519317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "The Apostle who brought Christianity to India."
    },
    {
      name: "Parumala Thirumeni",
      image: "https://images.pexels.com/photos/7031926/pexels-photo-7031926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "St. Gregorios of Parumala, the first canonized saint from India."
    },
    {
      name: "St. Gregorios",
      image: "https://images.pexels.com/photos/5946958/pexels-photo-5946958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "Known for his theological wisdom and pastoral care."
    },
    {
      name: "St. Dionysius",
      image: "https://images.pexels.com/photos/208321/pexels-photo-208321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "A reformer and spiritual leader of the church."
    },
    {
      name: "St. Stephanos",
      image: "https://images.pexels.com/photos/1045535/pexels-photo-1045535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "The first martyr of Christianity."
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Saints" 
        subtitle="The holy men and women who inspire our faith"
        bgImage="https://images.pexels.com/photos/208372/pexels-photo-208372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              In the Orthodox tradition, saints are venerated as examples of holiness and as intercessors who pray for us. 
              They inspire us to live virtuous lives and remind us of God's grace working in human lives.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The saints pictured below hold special significance for our church and our Orthodox tradition. We commemorate 
              them on their feast days and ask for their prayers in our liturgical services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {saints.map((saint) => (
              <SaintCard 
                key={saint.name}
                name={saint.name}
                image={saint.image}
                description={saint.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaintsPage;