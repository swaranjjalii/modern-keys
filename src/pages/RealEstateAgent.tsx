import React from "react";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const RealEstateAgentPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="glass-card max-w-3xl mx-auto p-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-navy text-center">AI Real Estate Agent</h1>
            <div className="flex justify-center">
              <iframe
                src="https://swaranjalii-real-estate-agent.hf.space"
                frameBorder="0"
                width="850"
                height="450"
                title="Real Estate Agent"
                style={{ borderRadius: "12px", boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RealEstateAgentPage;
