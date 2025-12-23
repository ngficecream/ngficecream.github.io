import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config/siteConfig.json';

const Footer = () => {
  const { footer, navbar, contact } = config;

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img 
              src={navbar.logo} 
              alt="Natural Gujrati Ice Creams" 
              className="h-20 brightness-0 invert"
            />
            <div 
              className="text-gray-300 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: footer.about }}
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b-2 border-primary-600 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navbar.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 text-primary-600 group-hover:mr-3 transition-all">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b-2 border-primary-600 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href={`tel:${contact.phone}`} className="hover:text-primary-400 transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href={`mailto:${contact.email}`} className="hover:text-primary-400 transition-colors break-all">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: contact.address }} />
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b-2 border-primary-600 pb-2 inline-block">
              Connect With Us
            </h3>
            <div className="flex space-x-3 mb-6">
              <a
                href={footer.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                title="Instagram"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a
                href={footer.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                title="Facebook"
              >
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a
                href={footer.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp text-white"></i>
              </a>
            </div>
            <a
              href={navbar.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              data-testid="order-now-footer-btn"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-2 md:mb-0">
              © 2025 Natural Gujrati Ice Creams. All rights reserved.
            </div>
            <div>
              Developed by{' '}
              <a 
                href="https://www.warriorwhocodes.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Warrior Who Codes
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
