import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config/siteConfig.json';

const About = () => {
  const { about } = config;

  const values = [
    {
      icon: '🌿',
      title: 'Natural Ingredients',
      description: 'Only the finest, freshest ingredients make it into our ice creams'
    },
    {
      icon: '❤️',
      title: 'Made with Love',
      description: 'Every batch is crafted with care and passion, just like homemade'
    },
    {
      icon: '🏆',
      title: 'Quality Promise',
      description: 'Pharma-grade ingredients and traditional recipes ensure excellence'
    },
    {
      icon: '🇮🇳',
      title: 'Gujarati Heritage',
      description: 'Authentic flavors rooted in rich Gujarati culinary traditions'
    }
  ];

  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-down">
            {about.title.split('|')[0]}
          </h1>
          <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
          <h2 className="text-2xl md:text-3xl font-semibold opacity-90 animate-fade-in">
            {about.title.split('|')[1]}
          </h2>
        </div>
      </section>

      {/* Subtitle */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-2xl md:text-3xl text-primary-700 font-semibold max-w-3xl mx-auto animate-slide-up">
            {about.subtitle}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Founder Introduction */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-6xl shadow-2xl">
                👩‍🍳
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Mrs. Sonia Soni</h3>
              <p className="text-xl text-primary-600 font-semibold">Founder & Heart of Natural Gujrati Ice Creams</p>
            </div>

            {/* Story Content */}
            <div className="space-y-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 shadow-2xl">
              {about.paragraphs.map((paragraph, idx) => (
                <div 
                  key={idx}
                  className="animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <p 
                    className="text-lg leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                  {idx < about.paragraphs.length - 1 && (
                    <div className="w-12 h-1 bg-primary-300 mt-6"></div>
                  )}
                </div>
              ))}

              {/* Quote */}
              <div className="mt-12 pt-8 border-t-2 border-primary-200">
                <div className="relative">
                  <svg className="absolute -top-4 -left-4 w-12 h-12 text-primary-300 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"/>
                  </svg>
                  <blockquote className="text-xl md:text-2xl text-primary-700 font-semibold text-center italic pl-8 pr-8">
                    {about.quote}
                  </blockquote>
                  <p className="text-right text-gray-600 mt-4 text-lg">
                    — <span className="font-semibold">{about.author}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${idx * 0.3}s` }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* 2019 */}
              <div className="flex gap-6 animate-slide-up">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary-600">2019</span>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mt-2"></div>
                  <div className="w-0.5 h-full bg-primary-200 ml-1.5"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Moved to Kota</h3>
                    <p className="text-gray-700">Family relocates from Ahmedabad to Kota, sparking the journey of bringing authentic Gujarati ice cream to a new city.</p>
                  </div>
                </div>
              </div>

              {/* 2020-2022 */}
              <div className="flex gap-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary-600">2020-22</span>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mt-2"></div>
                  <div className="w-0.5 h-full bg-primary-200 ml-1.5"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kitchen Experiments</h3>
                    <p className="text-gray-700">Mrs. Sonia perfects traditional recipes, creating ice creams that win hearts of family and friends. Word spreads quickly.</p>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="flex gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary-600">2023</span>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mt-2"></div>
                  <div className="w-0.5 h-full bg-primary-200 ml-1.5"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-6 shadow-lg border-2 border-primary-400">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">🎉 Natural Gujrati Ice Creams Born</h3>
                    <p className="text-gray-700">The brand officially launches, bringing authentic Gujarati ice cream flavors to Kota and beyond.</p>
                  </div>
                </div>
              </div>

              {/* 2025 */}
              <div className="flex gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary-600">2025</span>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mt-2"></div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expanding Horizons</h3>
                    <p className="text-gray-700">Now available on Swiggy and Zomato, serving more customers and spreading joy, one scoop at a time!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Experience Our Story in Every Scoop
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Taste the passion, tradition, and love that goes into every batch
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              to="/flavours"
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              data-testid="view-flavours-about"
            >
              View Our Flavours
            </Link>
            <Link
              to="/stores"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300"
              data-testid="find-store-about"
            >
              Find Us Near You
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
