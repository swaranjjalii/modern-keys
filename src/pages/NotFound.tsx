
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "../components/shared/Button";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card max-w-lg mx-auto p-12 animate-fade-in">
            <h1 className="text-6xl font-bold text-navy mb-2 font-serif">404</h1>
            <p className="text-xl text-navy-light mb-6">Oops! Page not found</p>
            <p className="text-gray-600 mb-8">
              The property you're looking for doesn't exist or has been moved to a new location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="navy"
                icon={<Home size={18} />}
                as={Link}
                to="/"
              >
                Return Home
              </Button>
              <Button
                variant="secondary"
                icon={<ArrowLeft size={18} />}
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
