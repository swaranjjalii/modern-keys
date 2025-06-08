import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Button from '../shared/Button';

const PropertySearch = () => {
  const [city, setCity] = useState('');
  const [maxPrice, setMaxPrice] = useState(5.0);
  const [propertyCategory, setPropertyCategory] = useState('Residential');
  const [propertyType, setPropertyType] = useState('Flat');
  const [aiProperties, setAiProperties] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAiRecommendations = async () => {
    setLoading(true);
    setAiProperties(null);
    setError(null);
    try {
      const response = await fetch('http://localhost:8502/api/ai-properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          city,
          max_price: maxPrice,
          property_category: propertyCategory,
          property_type: propertyType
        })
      });
      if (!response.ok) throw new Error('Failed to fetch AI recommendations');
      const data = await response.json();
      setAiProperties(data.result || 'No recommendations found.');
    } catch (err) {
      setError('Error fetching recommendations.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-10" id="search">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-subtle rounded-lg p-6 animate-fade-in">
            <h2 className="text-2xl font-serif font-semibold text-navy mb-6">Find Your Dream Property</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium">City</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter city name (e.g., Bangalore)"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Maximum Price (in Crores)</label>
                <input
                  type="number"
                  min={0.1}
                  max={100}
                  step={0.1}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Property Category</label>
                <select
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  value={propertyCategory}
                  onChange={e => setPropertyCategory(e.target.value)}
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">Property Type</label>
                <select
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  value={propertyType}
                  onChange={e => setPropertyType(e.target.value)}
                >
                  <option value="Flat">Flat</option>
                  <option value="Individual House">Individual House</option>
                </select>
              </div>
            </div>
            <Button
              variant="primary"
              className="w-full flex items-center justify-center"
              icon={<Search size={18} />}
              onClick={handleAiRecommendations}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Get AI Recommendations'}
            </Button>
            {error && <div className="mt-4 text-red-600">{error}</div>}
            {aiProperties && (
              <div className="mt-6 p-4 bg-gray-50 border rounded animate-fade-in">
                <h3 className="font-semibold mb-2 text-navy">AI Recommendations</h3>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: aiProperties }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
