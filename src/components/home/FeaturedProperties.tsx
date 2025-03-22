
import React from 'react';
import PropertyCard from './PropertyCard';
import Button from '../shared/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProperties = () => {
  // This would come from an API in a real application
  const properties = [
    {
      id: '1',
      title: 'Modern Luxury Villa',
      address: 'Beverly Hills, CA 90210',
      price: 4500000,
      bedrooms: 5,
      bathrooms: 6,
      area: 5200,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      tags: ['Luxury', 'New'],
      featured: true,
      aiMatch: 92
    },
    {
      id: '2',
      title: 'Oceanfront Penthouse',
      address: 'Malibu, CA 90265',
      price: 6200000,
      bedrooms: 4,
      bathrooms: 4.5,
      area: 3800,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      tags: ['Penthouse', 'Ocean View'],
      featured: true,
      aiMatch: 88
    },
    {
      id: '3',
      title: 'City Center Apartment',
      address: 'Manhattan, NY 10022',
      price: 2800000,
      bedrooms: 3,
      bathrooms: 2,
      area: 2200,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
      tags: ['Central', 'Views'],
      featured: true,
      aiMatch: 95
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="featured-properties">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="section-heading">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our hand-picked selection of premium properties, chosen by our AI for exceptional quality and value.
            </p>
          </div>
          <Link to="/properties">
            <Button 
              variant="secondary" 
              className="mt-4 md:mt-0"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              View All Properties
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              {...property}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Looking for something specific? Let our AI find your perfect match.
          </p>
          <Button variant="gold">
            Get Personalized Recommendations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
