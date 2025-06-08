import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ChatbotButton from '../components/home/ChatbotButton';
import Button from '../components/shared/Button';
import { BarChart2, LineChart, TrendingUp, Download, Users, Globe, Clock, ArrowRight } from 'lucide-react';

const Insights = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      const res = await fetch('http://localhost:8502/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (data.success) {
        setFeedback('Subscribed successfully!');
        setEmail('');
      } else {
        setFeedback(data.message || 'Subscription failed.');
      }
    } catch (err) {
      setFeedback('Error subscribing.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <header className="pt-28 pb-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4 animate-fade-in">
            Market Insights
          </h1>
          <p className="text-lg text-white/80 max-w-2xl animate-fade-in" style={{ animationDelay: '100ms' }}>
            AI-powered analysis and trends to help you make informed real estate decisions
          </p>
        </div>
      </header>
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Featured insight */}
          <div className="bg-white shadow-subtle rounded-lg overflow-hidden mb-12 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-navy mb-4">
                  Q3 2023 Luxury Real Estate Market Report
                </h2>
                <p className="text-gray-600 mb-6">
                  Our AI has analyzed over 50,000 luxury property transactions and market indicators to provide you with the most comprehensive market outlook for the coming quarter.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 mr-4 mt-1">
                      <TrendingUp size={20} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy">7.2% Projected Growth</h3>
                      <p className="text-gray-600">Expected increase in luxury property values in prime locations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 mr-4 mt-1">
                      <Users size={20} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy">Buyer Demographics Shift</h3>
                      <p className="text-gray-600">Increasing interest from tech professionals and international investors</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 mr-4 mt-1">
                      <Globe size={20} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy">Emerging Markets</h3>
                      <p className="text-gray-600">New luxury hotspots with potential for significant appreciation</p>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="gold" 
                  icon={<Download size={18} />}
                >
                  Download Full Report
                </Button>
              </div>
              <div className="bg-gray-100 p-6 flex items-center justify-center">
                <div className="w-full max-w-lg aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart2 size={64} className="text-navy mx-auto mb-4" />
                    <p className="text-gray-500">Interactive market analysis chart</p>
                    <p className="text-sm text-gray-400">(Visualizations available in full report)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Insight cards */}
          <h2 className="text-2xl font-serif font-semibold text-navy mb-6">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="glass-card overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-full bg-navy/10">
                      <LineChart size={24} className="text-navy" />
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={16} className="mr-1" />
                      <span>2 days ago</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-2 text-navy font-serif">
                    {index === 0 && "Investment Opportunity Zones"}
                    {index === 1 && "Luxury Amenity Trends 2023"}
                    {index === 2 && "Smart Home Impact on Valuation"}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {index === 0 && "AI-identified neighborhoods with highest appreciation potential based on infrastructure development and buyer demand patterns."}
                    {index === 1 && "The most sought-after luxury amenities driving premium valuations in high-end properties across major markets."}
                    {index === 2 && "How integrated smart home technology is becoming a key factor in luxury property valuations and buyer preferences."}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-gold hover:text-gold-dark p-0"
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                  >
                    Read Analysis
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Subscribe section */}
          <div className="bg-navy rounded-lg p-8 text-white animate-fade-in">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                Get Personalized Market Insights
              </h2>
              <p className="text-white/80 mb-6">
                Subscribe to receive AI-generated market reports tailored to your investment criteria and property preferences
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                <form onSubmit={handleSubscribe} className="flex w-full gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                  <Button variant="gold" type="submit" disabled={loading || !email}>
                    {loading ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
              </div>
              {feedback && (
                <div className="text-gold mt-2 text-sm">{feedback}</div>
              )}
              <p className="text-white/60 text-sm mt-4">
                We'll send you weekly insights and never share your information
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Insights;
