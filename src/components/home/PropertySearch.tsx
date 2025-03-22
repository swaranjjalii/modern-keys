
import React, { useState } from 'react';
import { Search, Home, DollarSign, MapPin, Filter, X } from 'lucide-react';
import Button from '../shared/Button';
import Badge from '../shared/Badge';

interface FilterOption {
  label: string;
  value: string;
  options?: { label: string; value: string }[];
}

const PropertySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const filterCategories: FilterOption[] = [
    { 
      label: 'Property Type',
      value: 'type',
      options: [
        { label: 'House', value: 'house' },
        { label: 'Apartment', value: 'apartment' },
        { label: 'Penthouse', value: 'penthouse' },
        { label: 'Villa', value: 'villa' },
        { label: 'Commercial', value: 'commercial' },
      ]
    },
    { 
      label: 'Price Range',
      value: 'price',
      options: [
        { label: '$500k - $1M', value: '500k-1m' },
        { label: '$1M - $2M', value: '1m-2m' },
        { label: '$2M - $5M', value: '2m-5m' },
        { label: '$5M+', value: '5m+' },
      ]
    },
    { 
      label: 'Bedrooms',
      value: 'bedrooms',
      options: [
        { label: '1+', value: '1+' },
        { label: '2+', value: '2+' },
        { label: '3+', value: '3+' },
        { label: '4+', value: '4+' },
      ]
    },
    { 
      label: 'Features',
      value: 'features',
      options: [
        { label: 'Pool', value: 'pool' },
        { label: 'Garden', value: 'garden' },
        { label: 'Gym', value: 'gym' },
        { label: 'Garage', value: 'garage' },
        { label: 'Ocean View', value: 'ocean-view' },
      ]
    },
  ];
  
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const clearFilters = () => {
    setActiveFilters([]);
  };
  
  return (
    <section className="bg-white py-10" id="search">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-subtle rounded-lg p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-serif font-semibold text-navy">Find Your Dream Property</h2>
              <Button 
                variant="ghost" 
                className="text-navy" 
                onClick={() => setShowFilters(!showFilters)}
                icon={<Filter size={18} />}
              >
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>
            
            <div className="flex items-center border border-gray-200 rounded-lg mb-4 focus-within:ring-2 focus-within:ring-gold/30 focus-within:border-gold">
              <div className="flex items-center pl-4">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full px-4 py-3 border-0 focus:ring-0 text-gray-900 placeholder-gray-500 focus:outline-none"
                placeholder="City, neighborhood, or address"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="gold" className="m-1">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            
            {showFilters && (
              <div className="border border-gray-200 rounded-lg p-4 mb-4 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filterCategories.map((category) => (
                    <div key={category.value} className="space-y-2">
                      <h3 className="font-medium text-navy">{category.label}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.options?.map((option) => (
                          <Badge
                            key={option.value}
                            variant={activeFilters.includes(option.value) ? 'gold' : 'outline'}
                            className="cursor-pointer"
                            onClick={() => toggleFilter(option.value)}
                          >
                            {option.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {activeFilters.length > 0 && (
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Active Filters:</span>
                    <div className="flex flex-wrap gap-2">
                      {activeFilters.map(filter => (
                        <Badge key={filter} variant="gold" className="flex items-center">
                          {filter}
                          <button 
                            onClick={() => toggleFilter(filter)}
                            className="ml-1 focus:outline-none"
                          >
                            <X size={14} />
                          </button>
                        </Badge>
                      ))}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-navy ml-2"
                        onClick={clearFilters}
                      >
                        Clear All
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="secondary" 
                className="flex-1"
                icon={<DollarSign size={18} />}
              >
                Price Analytics
              </Button>
              <Button 
                variant="secondary" 
                className="flex-1"
                icon={<Home size={18} />}
              >
                Compare Properties
              </Button>
              <Button 
                variant="navy" 
                className="flex-1"
                icon={<Search size={18} />}
              >
                AI Recommendations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
