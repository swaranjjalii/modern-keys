import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <Link to="/" className="text-2xl font-bold font-serif mb-4 block">
              Elite<span className="text-gold">Estate</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-xs">
              AI-powered luxury property recommendations tailored to your preferences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-gold transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-300 hover:text-gold transition-colors">Market Insights</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-gold transition-colors">News</Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?type=luxury" className="text-gray-300 hover:text-gold transition-colors">Luxury Homes</Link>
              </li>
              <li>
                <Link to="/properties?type=apartment" className="text-gray-300 hover:text-gold transition-colors">City Apartments</Link>
              </li>
              <li>
                <Link to="/properties?type=villa" className="text-gray-300 hover:text-gold transition-colors">Villas</Link>
              </li>
              <li>
                <Link to="/properties?type=penthouse" className="text-gray-300 hover:text-gold transition-colors">Penthouses</Link>
              </li>
              <li>
                <Link to="/properties?type=commercial" className="text-gray-300 hover:text-gold transition-colors">Commercial</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">EliteEstate, 101 Koregaon Park, Pune, Maharashtra 411001, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300">8007103870</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300">swaranjalishahapure004@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EliteEstate. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link> {' · '}
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
