import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuthModal from '../components/auth/AuthModal';
import propertiesData from '../data/properties.json';

const Properties = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const allProperties = propertiesData.properties || [];

  // Filter states
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [propertyType, setPropertyType] = useState('');

  // Filtering logic
  const filteredProperties = allProperties.filter((property: any) => {
    return (
      (city === '' || property.city.toLowerCase().includes(city.toLowerCase())) &&
      (locality === '' || property.locality.toLowerCase().includes(locality.toLowerCase())) &&
      (propertyType === '' || property.property_type.toLowerCase().includes(propertyType.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-navy mb-10 text-center tracking-tight drop-shadow-sm">Property Search</h1>
          {/* Filters */}
          <div className="bg-white/80 rounded-xl shadow-subtle p-6 mb-10 flex flex-wrap gap-6 items-end justify-center border border-gray-200 backdrop-blur-sm">
            <div>
              <label className="block text-sm font-semibold mb-1 text-navy">City</label>
              <input type="text" value={city} onChange={e => setCity(e.target.value)} className="border border-navy/20 rounded-lg px-4 py-2 w-44 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition" placeholder="e.g. Nagpur" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-navy">Locality</label>
              <input type="text" value={locality} onChange={e => setLocality(e.target.value)} className="border border-navy/20 rounded-lg px-4 py-2 w-44 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition" placeholder="e.g. Besa" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-navy">Property Type</label>
              <input type="text" value={propertyType} onChange={e => setPropertyType(e.target.value)} className="border border-navy/20 rounded-lg px-4 py-2 w-44 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition" placeholder="e.g. Residential Plot" />
            </div>
          </div>
          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.length === 0 && (
              <div className="col-span-full text-center text-gray-400 text-lg py-12">No properties found.</div>
            )}
            {filteredProperties.map((property: any) => (
              <div key={property.property_id} className="group bg-white/90 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-gold transition-all duration-200 p-6 flex flex-col gap-2 card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-navy font-serif truncate">{property.locality}, {property.city}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${property.status?.toLowerCase().includes('ready') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{property.status}</span>
                </div>
                <div className="mb-1 text-gold font-semibold tracking-wide text-sm">{property.property_type}</div>
                <div className="flex gap-4 text-gray-600 text-sm mb-2">
                  {property.bedrooms && <div><span className="font-medium text-navy">{property.bedrooms}</span> Bed{property.bedrooms > 1 ? 's' : ''}</div>}
                  {property.bathrooms && <div><span className="font-medium text-navy">{property.bathrooms}</span> Bath{property.bathrooms > 1 ? 's' : ''}</div>}
                  {property.area_sqft && <div>Area: <span className="font-medium text-navy">{property.area_sqft}</span> sqft</div>}
                  {property.plot_area_sqft && <div>Plot: <span className="font-medium text-navy">{property.plot_area_sqft}</span> sqft</div>}
                </div>
                <div className="font-bold text-2xl text-gold mt-2 mb-1">
                  {property.price_inr ? `₹${property.price_inr.toLocaleString()}` : ''}
                  {property.rent_per_month_inr ? <span className="text-base text-navy font-medium"> | Rent: ₹{property.rent_per_month_inr.toLocaleString()}/mo</span> : ''}
                </div>
                {property.highlights && property.highlights.length > 0 && (
                  <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                    {property.highlights.map((h: string, i: number) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
};

export default Properties;
