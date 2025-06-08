import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Search } from 'lucide-react';
import Button from '../shared/Button';
import AuthModal from '../auth/AuthModal';
import { useAuth } from '../auth/AuthContext';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Market Insights', path: '/insights' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'News', path: 'http://localhost:8080/news', external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'py-3 bg-white shadow-subtle'
        : 'py-5 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold font-serif text-navy animate-fade-in"
        >
          Elite<span className="text-gold">Estate</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 mx-1 rounded-md transition-all duration-300 ${location.pathname === '/news'
                  ? 'text-gold font-medium'
                  : 'text-navy hover:text-gold'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 mx-1 rounded-md transition-all duration-300 ${location.pathname === link.path
                  ? 'text-gold font-medium'
                  : 'text-navy hover:text-gold'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            )
          ))}

          {user ? (
            <>
              <span className="mx-2 text-navy font-medium">Hi, {user.name}</span>
              <Button variant="secondary" className="mx-1" onClick={signOut}>Sign Out</Button>
            </>
          ) : (
            <Button
              variant="gold"
              className="ml-3 animate-fade-in"
              icon={<User size={18} />}
              onClick={() => setAuthOpen(true)}
            >
              Sign In
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-navy hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-card absolute top-full left-0 right-0 animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col">
            {navLinks.map((link, index) => (
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-3 rounded-md text-lg transition-all duration-300 ${location.pathname === '/news'
                    ? 'text-gold font-medium'
                    : 'text-navy hover:text-gold'
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-md text-lg transition-all duration-300 ${location.pathname === link.path
                    ? 'text-gold font-medium'
                    : 'text-navy hover:text-gold'
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="mt-4 mb-2 flex flex-col space-y-3">
              <Button
                variant="secondary"
                className="w-full justify-start"
                icon={<Search size={18} />}
              >
                Search
              </Button>
              {user ? (
                <>
                  <span className="mx-2 text-navy font-medium">Hi, {user.name}</span>
                  <Button variant="secondary" className="w-full justify-start" onClick={signOut}>Sign Out</Button>
                </>
              ) : (
                <Button
                  variant="gold"
                  className="w-full justify-start"
                  icon={<User size={18} />}
                  onClick={() => setAuthOpen(true)}
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </nav>
  );
};

export default Navbar;
