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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <header className="pt-28 pb-12 bg-gradient-to-r from-navy to-gold/20 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 animate-fade-in drop-shadow-lg">
            Market Insights
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl animate-fade-in" style={{ animationDelay: '100ms' }}>
            AI-powered analysis and trends to help you make informed real estate decisions
          </p>
        </div>
      </header>
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          {/* Featured insight */}
          <div className="bg-white/90 shadow-xl rounded-2xl overflow-hidden mb-12 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-navy mb-4">
                  Q3 2023 Luxury Real Estate Market Report
                </h2>
                <p className="text-gray-700 mb-6">
                  Our AI has analyzed over 50,000 luxury property transactions and market indicators to provide you with the most comprehensive market outlook for the coming quarter.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-gold/10 mr-4 mt-1">
                      <TrendingUp size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy">7.2% Projected Growth</h3>
                      <p className="text-gray-600">Expected increase in luxury property values in prime locations</p>
                      <a href="https://www.magicbricks.com/property-news/real-estate-market-trends" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 underline mt-1 inline-block">Read more on MagicBricks Market Trends</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-gold/10 mr-4 mt-1">
                      <Users size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy">Buyer Demographics Shift</h3>
                      <p className="text-gray-600">Increasing interest from tech professionals and international investors</p>
                      <a href="https://www.hindustantimes.com/real-estate/techies-drive-demand-in-indian-real-estate-market-101684857234563.html" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 underline mt-1 inline-block">See techies' impact on Indian real estate</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-gold/10 mr-4 mt-1">
                      <Globe size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy">Emerging Markets</h3>
                      <p className="text-gray-600">New luxury hotspots with potential for significant appreciation</p>
                      <a href="https://www.99acres.com/articles/top-10-emerging-real-estate-markets-in-india.html" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 underline mt-1 inline-block">Top 10 emerging real estate markets in India</a>
                    </div>
                  </div>
                </div>
                {/* Remove Download Full Report button */}
              </div>
              <div className="bg-gradient-to-br from-gold/10 to-navy/5 p-6 flex items-center justify-center">
                <div className="w-full max-w-lg aspect-[4/3] bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-lg">
                  <div className="text-center w-full">
                    {/* Visualization Example (using a simple bar chart with SVG) */}
                    <h4 className="text-lg font-semibold text-navy mb-2">Market Analysis Chart (Sample)</h4>
                    <div className="w-full flex flex-col items-center mb-2">
                      <svg width="100%" height="180" viewBox="0 0 320 180" className="rounded border border-gray-200 bg-white">
                        <g>
                          <rect x="30" y="80" width="40" height="70" fill="#FFD700" rx="6" />
                          <rect x="90" y="60" width="40" height="90" fill="#1e293b" rx="6" />
                          <rect x="150" y="40" width="40" height="110" fill="#FFD700" rx="6" />
                          <rect x="210" y="100" width="40" height="50" fill="#1e293b" rx="6" />
                        </g>
                        <g fontSize="12" fill="#64748b" fontFamily="sans-serif">
                          <text x="50" y="165" textAnchor="middle">2021</text>
                          <text x="110" y="165" textAnchor="middle">2022</text>
                          <text x="170" y="165" textAnchor="middle">2023</text>
                          <text x="230" y="165" textAnchor="middle">2024</text>
                        </g>
                        <g fontSize="12" fill="#64748b" fontFamily="sans-serif">
                          <text x="10" y="90">7%</text>
                          <text x="10" y="70">10%</text>
                          <text x="10" y="50">13%</text>
                          <text x="10" y="110">4%</text>
                        </g>
                      </svg>
                      <div className="flex gap-4 mt-2 text-xs">
                        <span className="inline-flex items-center"><span className="w-3 h-3 rounded-full bg-[#FFD700] mr-1"></span>Growth</span>
                        <span className="inline-flex items-center"><span className="w-3 h-3 rounded-full bg-[#1e293b] mr-1"></span>Luxury Index</span>
                      </div>
                    </div>
                    <p className="text-gray-500">Sample market analysis chart (for illustration)</p>
                    
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
                    <div className="p-2 rounded-full bg-gold/10">
                      <LineChart size={24} className="text-gold" />
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
                  {index === 0 && (
                    <a href="https://www.naredco.in/Opportunities-in-Indian-Real-Estate.asp" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" className="text-gold hover:text-gold-dark p-0" icon={<ArrowRight size={16} />} iconPosition="right">
                        Read Analysis
                      </Button>
                    </a>
                  )}
                  {index === 1 && (
                    <a href="https://www.livemint.com/money/personal-finance/luxury-homes-amenities-are-key-to-premium-valuations-11685885885813.html" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" className="text-gold hover:text-gold-dark p-0" icon={<ArrowRight size={16} />} iconPosition="right">
                        Read Analysis
                      </Button>
                    </a>
                  )}
                  {index === 2 && (
                    <a href="https://www.houzz.in/magazine/how-smart-homes-are-changing-real-estate-valuations-stsetivw-vs~151073982" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" className="text-gold hover:text-gold-dark p-0" icon={<ArrowRight size={16} />} iconPosition="right">
                        Read Analysis
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Subscribe section */}
          <div className="bg-gradient-to-r from-navy to-gold/40 rounded-2xl p-10 text-white animate-fade-in shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                Get Personalized Market Insights
              </h2>
              <p className="text-white/90 mb-6">
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
              <p className="text-white/70 text-sm mt-4">
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
