import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config/siteConfig.json';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navbar } = config;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center animate-fade-in">
            <img 
              src={navbar.logo} 
              alt="Natural Gujrati Ice Creams" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-16' : 'h-20'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navbar.links.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a
              href={navbar.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              data-testid="order-now-nav-btn"
            >
              {navbar.cta.label}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 mt-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="py-2 space-y-1 bg-white rounded-lg shadow-lg">
            {navbar.links.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={navbar.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 my-2 px-4 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg text-center hover:from-primary-700 hover:to-primary-800 transition-all"
            >
              {navbar.cta.label}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
