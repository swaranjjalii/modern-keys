
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Home, ArrowRight } from 'lucide-react';
import Button from '../shared/Button';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bgIndex, setBgIndex] = useState(0);
  
  const backgroundImages = [
    '/images/luxury-home.jpg',
    '/images/city-skyline.jpg',
    '/images/modern-apartment.jpg'
  ];
  
  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // For demo purpose, we'll use placeholder images
  const heroStyle = {
    '--bg-image': `url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop)`,
  } as React.CSSProperties;
  
  return (
    <section 
      className="hero-section min-h-[100vh] flex items-center justify-center pt-20"
      style={heroStyle}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Discover Your <span className="text-gold">Perfect</span> Property
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            AI-powered recommendations tailored to your unique preferences
          </p>
          
          <div className="glass-card overflow-hidden p-2 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex flex-col md:flex-row">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 bg-transparent border-0 focus:ring-0 text-gray-900 placeholder-gray-500 focus:outline-none"
                  placeholder="Enter location, neighborhood, or building"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="gold" className="mt-2 md:mt-0">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Button 
              variant="secondary" 
              className="bg-white/90 backdrop-blur-sm"
              icon={<Home size={18} />}
            >
              Luxury Homes
            </Button>
            <Button 
              variant="secondary" 
              className="bg-white/90 backdrop-blur-sm"
              icon={<Home size={18} />}
            >
              Apartments
            </Button>
            <Button 
              variant="secondary" 
              className="bg-white/90 backdrop-blur-sm"
              icon={<Home size={18} />}
            >
              Penthouses
            </Button>
          </div>
          
          <a 
            href="#featured-properties" 
            className="inline-flex items-center text-white hover:text-gold transition-colors animate-fade-in" 
            style={{ animationDelay: '400ms' }}
          >
            <span className="mr-2">Explore Featured Properties</span>
            <ArrowRight size={16} className="animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
