import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const About = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl animate-fade-in">
        <h1 className="text-3xl font-serif font-semibold text-navy mb-6">About Us</h1>
        <p className="mb-4 text-lg text-gray-700">EliteEstate is an AI-powered real estate platform offering luxury property recommendations, market insights, and personalized service. Our mission is to help you find your dream home with the power of artificial intelligence and expert guidance.</p>
        <h2 className="text-2xl font-serif font-semibold text-navy mt-8 mb-4">Our Vision</h2>
        <p className="mb-4 text-gray-700">To revolutionize the real estate experience by combining advanced AI with human expertise, making property search seamless, insightful, and enjoyable.</p>
        <h2 className="text-2xl font-serif font-semibold text-navy mt-8 mb-4">Contact</h2>
        <p className="mb-2 text-gray-700">Email: swaranjalishahapure004@gmail.com</p>
        <p className="mb-2 text-gray-700">Phone: 8007103870</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
