import React from 'react';
import { Link } from 'react-router-dom';

const SeasonalBanner = () => {
  const currentMonth = new Date().getMonth();
  let seasonalMessage = '';
  let seasonalIcon = '🍨';
  
  // Determine season (India seasons)
  if (currentMonth >= 2 && currentMonth <= 5) {
    // March to June - Summer
    seasonalMessage = '☀️ Beat the summer heat! Try our refreshing fruit ice creams!';
    seasonalIcon = '🌞';
  } else if (currentMonth >= 6 && currentMonth <= 9) {
    // July to October - Monsoon
    seasonalMessage = '🌧️ Monsoon Special! Try our Ginger Cardamom & Tulsi Black Pepper flavors!';
    seasonalIcon = '🌦️';
  } else {
    // November to February - Winter
    seasonalMessage = '❄️ Winter Delights! Sitaphal, Orange & Strawberry are back in season!';
    seasonalIcon = '🍓';
  }

  return (
    <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 py-4 px-4 shadow-lg animate-fade-in" data-testid="seasonal-banner">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
          <div className="text-4xl animate-float">{seasonalIcon}</div>
          <div className="flex-1">
            <p className="text-white font-semibold text-lg md:text-xl">
              {seasonalMessage}
            </p>
          </div>
          <Link
            to="/flavours"
            className="px-6 py-2 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
            data-testid="view-flavours-btn"
          >
            View Flavours →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeasonalBanner;