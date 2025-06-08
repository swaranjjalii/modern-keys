import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const About = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <Navbar />
    <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-3xl w-full bg-white/90 rounded-2xl shadow-xl p-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-navy mb-6 text-center">About Us</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          <span className="font-semibold text-gold">EliteEstate</span> is a modern real estate platform dedicated to helping you find your dream home, premium properties, and investment opportunities across India. Our mission is to make property discovery seamless, transparent, and enjoyable for everyone.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-navy mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Curated listings of luxury, premium, and affordable properties</li>
            <li>Modern, user-friendly interface for easy browsing</li>
            <li>AI-powered search for smarter property discovery</li>
            <li>Verified property details and high-quality images</li>
            <li>Responsive support and personalized assistance</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-navy mb-2">Our Story</h2>
          <p className="text-gray-700">
            Founded by a passionate team of real estate and technology experts, EliteEstate was born out of the need for a better, more transparent way to connect buyers and sellers. We believe in empowering our users with the best tools and information to make confident decisions.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-navy mb-2">Contact Us</h2>
          <p className="text-gray-700 mb-2">Have questions or need help? <a href="/contact" className="text-gold hover:underline font-medium">Contact our team</a> for personalized support.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
