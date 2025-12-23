import React from 'react';
import config from '../../config/siteConfig.json';

const Stores = () => {
  const { stores, contact } = config;

  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-down">
            Find Us Near You
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fade-in">
            Visit our store and experience the authentic taste of Natural Gujrati Ice Creams
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full min-h-[400px]">
                <iframe
                  src={stores.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                  data-testid="store-map"
                ></iframe>
              </div>
            </div>

            {/* Store Info */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">🏪 Our Store</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">Store Address</h3>
                      <p 
                        className="text-gray-600 leading-relaxed mb-3"
                        dangerouslySetInnerHTML={{ __html: stores.address }}
                      />
                      <a
                        href={stores.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all"
                        data-testid="get-directions-btn"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <a 
                        href={`tel:${contact.phone}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-lg transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⏰ Store Hours</h3>
                <div className="space-y-3 text-gray-800">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Monday - Saturday</span>
                    <span className="text-primary-600 font-bold">10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-primary-600 font-bold">10:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    data-testid="whatsapp-store-btn"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                    Chat on WhatsApp
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    data-testid="call-store-btn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Can't Visit? Order Online!</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get our delicious ice creams delivered right to your doorstep
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={config.siteMetadata.deliveryLinkSwiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Swiggy" className="h-6 bg-white px-2 py-0.5 rounded" />
              Order on Swiggy
            </a>
            <a
              href={config.siteMetadata.deliveryLinkZomato}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Zomato.svg/1920px-Zomato.svg.png" alt="Zomato" className="h-6 bg-white px-2 py-0.5 rounded" />
              Order on Zomato
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Stores;