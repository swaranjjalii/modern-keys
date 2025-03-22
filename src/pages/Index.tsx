
import React, { useState } from 'react';
import Hero from '../components/home/Hero';
import PropertySearch from '../components/home/PropertySearch';
import FeaturedProperties from '../components/home/FeaturedProperties';
import MarketInsights from '../components/home/MarketInsights';
import ChatbotButton from '../components/home/ChatbotButton';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuthModal from '../components/auth/AuthModal';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { toast } = useToast();
  
  // Check if OpenAI API key is available
  React.useEffect(() => {
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      toast({
        title: "API Key Missing",
        description: "Add an OpenAI API key to env variables to enable the AI chatbot.",
        variant: "destructive"
      });
    }
  }, [toast]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PropertySearch />
        <FeaturedProperties />
        <MarketInsights />
      </main>
      <Footer />
      <ChatbotButton />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
};

export default Index;
