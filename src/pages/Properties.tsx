
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PropertyCard from '../components/home/PropertyCard';
import ChatbotButton from '../components/home/ChatbotButton';
import Button from '../components/shared/Button';
import { Filter, Search, Sliders, Grid, List, ArrowDown } from 'lucide-react';

const Properties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
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
    {
      id: '4',
      title: 'Historic Brownstone',
      address: 'Brooklyn, NY 11201',
      price: 3500000,
      bedrooms: 4,
      bathrooms: 3.5,
      area: 3100,
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop',
      tags: ['Historic', 'Renovated'],
      aiMatch: 82
    },
    {
      id: '5',
      title: 'Lakefront Estate',
      address: 'Lake Tahoe, CA 96150',
      price: 7800000,
      bedrooms: 6,
      bathrooms: 7,
      area: 6500,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop',
      tags: ['Waterfront', 'Estate'],
      aiMatch: 87
    },
    {
      id: '6',
      title: 'Downtown Loft',
      address: 'San Francisco, CA 94105',
      price: 1950000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1800,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
      tags: ['Loft', 'City'],
      aiMatch: 91
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <header className="pt-28 pb-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4 animate-fade-in">
            Luxury Properties
          </h1>
          <p className="text-lg text-white/80 max-w-2xl animate-fade-in" style={{ animationDelay: '100ms' }}>
            Discover our curated collection of premium properties with AI-powered recommendations
          </p>
        </div>
      </header>
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Filters and controls */}
          <div className="bg-white shadow-subtle rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h2 className="text-xl font-serif font-semibold text-navy">
                Available Properties <span className="text-gray-500 text-lg">({properties.length})</span>
              </h2>
              
              <div className="flex mt-4 md:mt-0 space-x-2">
                <Button 
                  variant="secondary" 
                  size="sm"
                  className={viewMode === 'grid' ? 'bg-navy/10' : ''}
                  onClick={() => setViewMode('grid')}
                  icon={<Grid size={18} />}
                >
                  Grid
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className={viewMode === 'list' ? 'bg-navy/10' : ''}
                  onClick={() => setViewMode('list')}
                  icon={<List size={18} />}
                >
                  List
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search by location, property type or keyword"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold/50 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <Button 
                  variant="secondary" 
                  className="w-full justify-between"
                >
                  <span>Sort By: Price (High to Low)</span>
                  <ArrowDown size={16} />
                </Button>
              </div>
              
              <div>
                <Button 
                  variant="navy" 
                  className="w-full"
                  icon={<Filter size={18} />}
                >
                  Filter Properties
                </Button>
              </div>
            </div>
          </div>
          
          {/* Property grid */}
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
            {properties.map((property, index) => (
              <PropertyCard
                key={property.id}
                {...property}
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          
          {/* Load more */}
          <div className="text-center mt-12">
            <Button 
              variant="secondary"
              icon={<Sliders size={18} />}
            >
              Load More Properties
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Properties;
