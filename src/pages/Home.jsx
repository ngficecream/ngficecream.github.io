import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InstagramEmbed from '../components/InstagramEmbed';
import Testimonials from '../components/Testimonials';
import SeasonalBanner from '../components/SeasonalBanner';
import config from '../../config/siteConfig.json';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { home, siteMetadata } = config;
  const { banners } = home;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <main className="pt-20">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0">
          {banners.map((src, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={src}
                alt={`Banner ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {home.hero.title}
            </h1>
            <div 
              className="text-lg md:text-xl mb-8 leading-relaxed opacity-90"
              dangerouslySetInnerHTML={{ __html: home.hero.text.split('<br /><br />')[0] }}
            />
            <div className="flex flex-wrap gap-4">
              <a
                href={siteMetadata.deliveryLinkSwiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                data-testid="hero-order-btn"
              >
                Order Now 🍦
              </a>
              <Link
                to="/flavours"
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-300"
                data-testid="hero-explore-btn"
              >
                Explore Flavours
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Delivery Partners Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-4 px-4 shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 text-white text-center">
          <span className="font-semibold text-lg">🚀 Now delivering via:</span>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" 
            alt="Swiggy" 
            className="h-8 bg-white px-3 py-1 rounded"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Zomato.svg/1920px-Zomato.svg.png" 
            alt="Zomato" 
            className="h-8 bg-white px-3 py-1 rounded"
          />
        </div>
      </div>

      {/* Seasonal Banner */}
      <SeasonalBanner />

      {/* Best Sellers Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50" data-testid="best-sellers-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Best Sellers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most loved flavors, crafted with authentic ingredients and traditional recipes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {home.bestSellers.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
                data-testid={`bestseller-card-${idx}`}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={`/config/img/ice-creams/${item.img}`}
                    alt={item.label}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.label}
                  </h3>
                  <div className="inline-block px-4 py-1 bg-primary-100 text-primary-600 font-semibold rounded-full text-sm">
                    Best Seller
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/flavours"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              data-testid="view-all-flavours-btn"
            >
              View All Flavours →
            </Link>
          </div>
        </div>
      </section>

      {/* Ingredients Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pure ingredients, traditional methods, and a commitment to quality in every scoop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
              <div className="mb-6 flex justify-center animate-float">
                <img src="/config/img/icons/fruit.png" alt="Fresh Fruits" className="h-32" />
              </div>
              <h3 className="text-2xl font-bold text-primary-600 mb-3">Fresh Fruits</h3>
              <p className="text-gray-700 leading-relaxed">
                Sourced from India's best farms, fresh fruit is in our DNA. Every scoop bursts with authentic, natural flavors.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="mb-6 flex justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <img src="/config/img/icons/milk.png" alt="Premium Milk" className="h-32" />
              </div>
              <h3 className="text-2xl font-bold text-primary-600 mb-3">Premium Milk</h3>
              <p className="text-gray-700 leading-relaxed">
                30 years with the same trusted supplier. Our milk gives every ice cream its signature richness and consistency.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6 flex justify-center animate-float" style={{ animationDelay: '1s' }}>
                <img src="/config/img/icons/sugar.png" alt="Pure Sugar" className="h-32" />
              </div>
              <h3 className="text-2xl font-bold text-primary-600 mb-3">Pharma-Grade Sugar</h3>
              <p className="text-gray-700 leading-relaxed">
                So pure it's certified for medicines. That's why every bite is smooth, clean, and authentically sweet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Franchise Banner */}
      <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 py-6 px-4 border-t-4 border-b-4 border-primary-600">
        <div className="container mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-800 font-semibold">
            💼 Interested in joining the Naturals family?{' '}
            <Link 
              to="/franchise" 
              className="text-primary-600 font-bold underline hover:text-primary-700 transition-colors"
              data-testid="franchise-link"
            >
              Explore Franchise Opportunities →
            </Link>
          </p>
        </div>
      </div>

      {/* Instagram Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50" data-testid="instagram-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Join our community @ngficecream for daily scoops of happiness!
            </p>
            <a
              href={config.footer.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <i className="fab fa-instagram mr-2"></i>
              Follow @ngficecream
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.instagramEmbeds.map((url, idx) => (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <InstagramEmbed url={url} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up">
            Ready to Taste the Original?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Order now and experience the authentic flavors of Natural Gujrati Ice Creams
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href={siteMetadata.deliveryLinkSwiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              data-testid="final-cta-swiggy"
            >
              Order on Swiggy
            </a>
            <a
              href={siteMetadata.deliveryLinkZomato}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              data-testid="final-cta-zomato"
            >
              Order on Zomato
            </a>
            <Link
              to="/stores"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300"
              data-testid="final-cta-stores"
            >
              Find Store Near You
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
