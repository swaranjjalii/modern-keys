import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuthModal from '../components/auth/AuthModal';

const testimonials = [
  {
    name: 'Amit S.',
    text: 'Found my dream home in just a few clicks! The site is easy to use and the listings are top-notch.',
    city: 'Mumbai',
  },
  {
    name: 'Priya D.',
    text: 'Great experience! The property details and photos helped me make a confident decision.',
    city: 'Pune',
  },
  {
    name: 'Rahul K.',
    text: 'Customer support was very helpful and responsive. Highly recommend this platform.',
    city: 'Nashik',
  },
];

const Index = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center bg-gradient-to-br from-navy to-gold/10">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 animate-fade-in">
            Find Your{' '}
            <span className="text-gold">Dream Home</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Discover premium properties, luxury apartments, and investment opportunities across all the India.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="/properties"
              className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-lg shadow-lg transition-all text-lg animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              Browse Properties
            </a>
            <a
              href="/ai-search"
              className="inline-block bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all text-lg animate-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              AI Search
            </a>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Featured Properties</h2>
            {/* Property Type Sections */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="bg-white rounded-xl shadow-md p-6 w-64 flex flex-col items-center hover:shadow-xl transition-all">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" alt="Apartment" className="w-20 h-20 object-cover rounded-full mb-3" />
                <h3 className="text-lg font-semibold text-navy mb-1">Apartments</h3>
                <p className="text-gray-600 text-center">
                  Modern, urban living spaces with amenities and security. Ideal for city dwellers and families.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 w-64 flex flex-col items-center hover:shadow-xl transition-all">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" alt="Villa" className="w-20 h-20 object-cover rounded-full mb-3" />
                <h3 className="text-lg font-semibold text-navy mb-1">Villas</h3>
                <p className="text-gray-600 text-center">
                  Spacious, luxurious homes with private gardens and premium features. Perfect for upscale living.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 w-64 flex flex-col items-center hover:shadow-xl transition-all">
                <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop" alt="Mansion" className="w-20 h-20 object-cover rounded-full mb-3" />
                <h3 className="text-lg font-semibold text-navy mb-1">Mansions</h3>
                <p className="text-gray-600 text-center">
                  Grand estates with expansive grounds, top-tier amenities, and unmatched privacy for elite lifestyles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-white/80 border-t border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-2xl font-bold text-gold mb-3">
                    {t.name[0]}
                  </div>
                  <div className="text-gray-700 mb-3">“{t.text}”</div>
                  <div className="text-navy font-semibold text-sm">
                    {t.name} <span className="text-gray-400">| {t.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gold/10 to-navy/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">Ready to Start Your Search?</h2>
            <p className="mb-6 text-gray-700">
              Contact our team for personalized assistance or sign up to get the latest property updates.
            </p>
            <a
              href="/contact"
              className="inline-block bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3 rounded-lg shadow transition-all text-lg"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
};

export default Index;
