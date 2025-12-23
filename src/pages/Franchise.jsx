import React from 'react';
import config from '../../config/siteConfig.json';

const Franchise = () => {
  const { franchise } = config;

  const benefits = [
    {
      icon: '🏆',
      title: 'Established Brand',
      description: 'Join a trusted name in authentic Gujarati ice creams since 2023'
    },
    {
      icon: '💰',
      title: 'Proven Business Model',
      description: 'Successful recipe for profitability and customer satisfaction'
    },
    {
      icon: '🤝',
      title: 'Complete Support',
      description: 'Training, marketing, and operational support throughout'
    },
    {
      icon: '🍨',
      title: 'Quality Products',
      description: 'Premium ingredients and authentic recipes that customers love'
    },
    {
      icon: '📊',
      title: 'Growth Potential',
      description: 'Tap into the growing natural ice cream market'
    },
    {
      icon: '❤️',
      title: 'Passionate Community',
      description: 'Be part of a family that values quality and tradition'
    }
  ];

  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down">
            Franchise Opportunities
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in">
            Partner with Natural Gujrati Ice Creams and bring the taste of authentic happiness to your city
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
            <a
              href={franchise.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              data-testid="apply-franchise-btn"
            >
              Apply Now 🚀
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of joining the Natural Gujrati Ice Creams family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${idx * 0.3}s` }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your ice cream business journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: 1, title: 'Submit Application', desc: 'Fill out our franchise application form with your details and location preferences' },
                { step: 2, title: 'Initial Discussion', desc: 'We\'ll review your application and schedule a discussion to understand your vision' },
                { step: 3, title: 'Site Evaluation', desc: 'Our team will help evaluate potential locations for your franchise' },
                { step: 4, title: 'Agreement & Training', desc: 'Sign the franchise agreement and receive comprehensive training' },
                { step: 5, title: 'Setup & Launch', desc: 'We support you in setting up the store and launching your business' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Investment & Requirements
              </h2>
              <p className="text-lg text-gray-600">
                Here's what you need to know about starting your franchise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">💵 Initial Investment</h3>
                <p className="text-gray-700 mb-2">Varies based on location and store size</p>
                <p className="text-sm text-gray-600">Contact us for detailed breakdown</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏪 Space Requirements</h3>
                <p className="text-gray-700 mb-2">Minimum 300-500 sq ft</p>
                <p className="text-sm text-gray-600">High footfall area preferred</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⏱️ ROI Timeline</h3>
                <p className="text-gray-700 mb-2">12-18 months (approx.)</p>
                <p className="text-sm text-gray-600">Based on location & operations</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🤝 Ongoing Support</h3>
                <p className="text-gray-700 mb-2">Marketing & operational guidance</p>
                <p className="text-sm text-gray-600">Continuous training programs</p>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              * All figures are indicative and subject to terms and conditions
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Fill out the franchise application form and our team will get in touch with you
          </p>
          <a
            href={franchise.formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-primary-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 animate-scale-in"
            data-testid="apply-now-franchise-btn"
          >
            Apply for Franchise Now 🚀
          </a>
          <p className="mt-6 text-sm opacity-75">
            Or call us at <a href={`tel:${config.contact.phone}`} className="underline font-semibold">{config.contact.phone}</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Franchise;