
import React from 'react';
import { TrendingUp, TrendingDown, BarChart2, PieChart, ArrowUpRight, ArrowRight } from 'lucide-react';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

interface InsightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down';
  percentage?: number;
  color?: string;
}

const InsightCard = ({ title, description, icon, trend, percentage, color = 'navy' }: InsightCardProps) => {
  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-full bg-${color}/10`}>
          {icon}
        </div>
        
        {trend && percentage && (
          <div className={`flex items-center text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 mr-1" />
            )}
            <span>{percentage}%</span>
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 font-serif text-navy">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <Link to="/insights" className="inline-flex items-center text-gold hover:text-gold-dark transition-colors">
        <span>Learn more</span>
        <ArrowUpRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
  );
};

const MarketInsights = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="section-heading">AI-Powered Market Insights</h2>
            <p className="text-gray-600 max-w-2xl">
              Stay ahead with real-time, AI-generated market trends and investment opportunities.
            </p>
          </div>
          <Link to="/insights">
            <Button 
              variant="secondary" 
              className="mt-4 md:mt-0"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              View All Insights
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InsightCard 
            title="Market Value Forecast"
            description="AI predicts a 7.2% growth in luxury property values in the next quarter based on current market conditions."
            icon={<BarChart2 className="h-6 w-6 text-navy" />}
            trend="up"
            percentage={7.2}
          />
          
          <InsightCard 
            title="Investment Hotspots"
            description="Emerging neighborhoods with the highest ROI potential, analyzed from thousands of market data points."
            icon={<PieChart className="h-6 w-6 text-gold" />}
            color="gold"
          />
          
          <InsightCard 
            title="Seasonal Trends"
            description="Optimal buying and selling windows based on historical seasonal performance data."
            icon={<TrendingUp className="h-6 w-6 text-navy" />}
            trend="up"
            percentage={3.5}
          />
        </div>
        
        <div className="mt-12 bg-navy rounded-lg p-8 text-white animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-semibold mb-4">Personalized Market Report</h3>
              <p className="mb-6">
                Receive a comprehensive, AI-generated market analysis tailored to your investment goals and preferences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-gold mr-2"></span>
                  Price trend forecasts for your preferred neighborhoods
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-gold mr-2"></span>
                  Investment opportunity alerts matching your criteria
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-gold mr-2"></span>
                  Customized property recommendations with ROI projections
                </li>
              </ul>
              <Button variant="gold">
                Get Your Free Report
              </Button>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gold/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gold/30 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                <div className="absolute inset-4 bg-gold/40 rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
                <div className="absolute inset-6 bg-gold rounded-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <span className="block text-3xl font-bold">AI</span>
                    <span className="text-sm">Powered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
