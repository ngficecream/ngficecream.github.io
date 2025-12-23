import React, { useState, useEffect } from 'react';
import InstagramEmbed from '../components/InstagramEmbed';
import config from '../../config/siteConfig.json';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { home } = config;
    const { banners } = home;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % banners.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [banners.length]);

    return (
        <main>
            {/* Delivery Banner */}
            <div className="delivery-banner">
                <span>Now available on</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Swiggy" className="delivery-logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Zomato.svg/1920px-Zomato.svg.png" alt="Zomato" className="delivery-logo" />
            </div>

            {/* Slider Section */}
            <section className="slider">
                <div className="slides">
                    {banners.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            className="slide"
                            alt={`Banner ${idx + 1}`}
                            style={{ display: idx === currentSlide ? 'block' : 'none' }}
                        />
                    ))}
                </div>
                <div className="slider-dots">
                    {banners.map((_, idx) => (
                        <span
                            key={idx}
                            className={`dot ${idx === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(idx)}
                        ></span>
                    ))}
                </div>
            </section>

            {/* Anniversary Header */}
            <section className="anniversary-header">
                <h1>{home.hero.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: home.hero.text }}>
                </p>
            </section>

            {/* Best Seller Grid */}
            <section className="best-sellers">
                <h1>Best Sellers</h1>
                <div className="bestseller-grid">
                    {home.bestSellers.map((item, idx) => (
                        <div className="bestseller-card" key={idx}>
                            <img src={`/config/img/ice-creams/${item.img}`} alt={item.label} />
                            <div className="bestseller-label">{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ingredient Story */}
            <section className="ingredient-story-centered">
                <div className="ingredient-row">
                    <div className="ingredient-block">
                        <img src="/config/img/icons/fruit.png" style={{ height: '160px' }} alt="Fruits" />
                        <h3>Fruits</h3>
                        <p>Fruit is in the DNA of Naturals. Fresh fruit, sourced from across India’s best farms, makes every scoop unique and original.</p>
                    </div>
                    <div className="ingredient-block">
                        <img src="/config/img/icons/milk.png" style={{ height: '160px' }} alt="Milk" />
                        <h3>Milk</h3>
                        <p>Our milk comes from the same trusted supplier for 30 years. It’s what gives Naturals ice creams their richness and consistency.</p>
                    </div>
                    <div className="ingredient-block">
                        <img src="/config/img/icons/sugar.png" style={{ height: '160px' }} alt="Sugar" />
                        <h3>Sugar</h3>
                        <p>We use only pharma-grade sugar—so pure it’s certified for medicines. That’s why every bite is smooth, clean, and real.</p>
                    </div>
                </div>
            </section>

            {/* Franchise Query Banner */}
            <div className="franchise-banner">
                <span>Franchise Queries: Interested in joining the Naturals family? <a href="/franchise">Click here</a></span>
            </div>

            {/* Instagram Grid */}
            <section className="instagram-section">
                <h2>Follow @ngficecream on Instagram</h2><br />
                <div className="insta-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.3rem', justifyContent: 'center' }}>
                    {home.instagramEmbeds.map((url, idx) => (
                        <InstagramEmbed key={idx} url={url} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;
