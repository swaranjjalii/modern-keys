import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { properties } from '../data/properties';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50 py-12">
          <div className="container mx-auto px-4 max-w-4xl animate-fade-in">
            <h1 className="text-3xl font-serif font-semibold text-navy mb-6">Property Not Found</h1>
            <p className="mb-4 text-gray-700">Sorry, we couldn't find the property you're looking for.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl animate-fade-in">
          <div className="bg-white rounded-lg shadow-subtle p-6 flex flex-col md:flex-row gap-8">
            <img src={property.image} alt={property.title} className="w-full md:w-1/2 rounded-lg object-cover max-h-96" />
            <div className="flex-1">
              <h1 className="text-3xl font-serif font-semibold text-navy mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="h-5 w-5 mr-1 flex-shrink-0" />
                <span className="text-sm truncate">{property.address}</span>
              </div>
              <h2 className="text-2xl font-semibold text-gold mb-4">₹{property.price.toLocaleString()}</h2>
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center"><Bed className="h-5 w-5 mr-1" />{property.bedrooms} Beds</div>
                <div className="flex items-center"><Bath className="h-5 w-5 mr-1" />{property.bathrooms} Baths</div>
                <div className="flex items-center"><Square className="h-5 w-5 mr-1" />{property.area.toLocaleString()} sq ft</div>
              </div>
              <p className="mb-6 text-gray-700">{property.description}</p>
              <h3 className="text-lg font-semibold mb-2">Contact Agent</h3>
              <form className="space-y-4">
                <input type="text" className="w-full px-3 py-2 border rounded input-focus" placeholder="Your Name" required />
                <input type="email" className="w-full px-3 py-2 border rounded input-focus" placeholder="Your Email" required />
                <textarea className="w-full px-3 py-2 border rounded input-focus" rows={3} placeholder="Your Message" required />
                <button type="submit" className="button-gold w-full">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
