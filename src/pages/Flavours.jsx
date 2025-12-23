import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config/siteConfig.json';

const Flavours = () => {
  const { flavours } = config;
  const [activeTab, setActiveTab] = useState(flavours.categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const getActiveProducts = () => {
    const category = flavours.categories.find(cat => cat.id === activeTab);
    const products = category ? category.products : [];
    
    if (searchQuery) {
      return products.filter(product => 
        product.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return products;
  };

  const getActiveCategory = () => {
    return flavours.categories.find(cat => cat.id === activeTab);
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-down">
            {flavours.title}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fade-in">
            Explore our delicious range of natural ice creams, crafted with authentic ingredients
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 animate-slide-up">
          <div className="relative">
            <input
              type="text"
              placeholder="Search flavours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 pl-12 rounded-full border-2 border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
              data-testid="search-flavours-input"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {flavours.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border-2 border-gray-200 hover:border-primary-300'
              }`}
              data-testid={`category-tab-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category Description */}
        {activeTab === 'monsoon' && (
          <div className="max-w-3xl mx-auto mb-8 p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl shadow-lg animate-fade-in">
            <p className="text-center text-gray-700 text-lg">
              🌧️ <strong>Monsoon Specials:</strong> Warm your soul with our unique monsoon flavors, crafted to complement the rainy season
            </p>
          </div>
        )}
        {activeTab === 'seasonal' && (
          <div className="max-w-3xl mx-auto mb-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-lg animate-fade-in">
            <p className="text-center text-gray-700 text-lg">
              ❄️ <strong>Winter Delights:</strong> Enjoy the freshness of seasonal fruits, available only during winter months
            </p>
          </div>
        )}

        {/* Products Grid */}
        {getActiveProducts().length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {getActiveProducts().map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
                data-testid={`product-card-${idx}`}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={`/config/img/ice-creams/${product.img}`}
                    alt={product.label}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-bold text-lg">View Details</span>
                  </div>
                  
                  {/* Seasonal Badge */}
                  {(activeTab === 'monsoon' || activeTab === 'seasonal') && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
                      {activeTab === 'monsoon' ? '🌧️ MONSOON' : '❄️ WINTER'}
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {product.label}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                      {product.rate}
                    </span>
                    <button className="px-4 py-2 bg-primary-100 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-600">No flavours found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-6 py-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 shadow-2xl animate-slide-up">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Decide? Order a Mixed Pack!
          </h2>
          <p className="text-white text-lg mb-6 opacity-90">
            Try multiple flavours and discover your new favorite
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={config.siteMetadata.deliveryLinkSwiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              data-testid="order-flavours-swiggy"
            >
              Order on Swiggy
            </a>
            <a
              href={config.siteMetadata.deliveryLinkZomato}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              data-testid="order-flavours-zomato"
            >
              Order on Zomato
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300"
              data-testid="contact-us-flavours"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Flavours;
