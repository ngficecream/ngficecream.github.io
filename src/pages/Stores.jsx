import React from 'react';
import config from '../../config/siteConfig.json';

const Stores = () => {
    const { stores } = config;

    return (
        <main>
            <section className="store-locator-section" style={{ padding: '2.2rem 1rem' }}>
                <center><h1>FIND OUR STORE</h1></center>
                <p style={{ fontSize: '1.18rem', maxWidth: '650px', margin: '18px auto 30px auto', textAlign: 'center', color: '#df5014' }}>
                    Visit us at our shop! The map below will guide you to our store location.
                    For additional directions or store details, contact us anytime.
                </p>

                {/* Google Map Embed */}
                <div style={{ maxWidth: '900px', margin: '0 auto 40px auto', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 2px 14px rgba(0,0,0,0.06)' }}>
                    <iframe
                        src={stores.mapEmbedUrl}
                        width="100%" height="420" frameBorder="0"
                        style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>

                <div style={{ textAlign: 'center', color: '#888' }}>
                    <strong>Store Address:</strong><br />
                    <span dangerouslySetInnerHTML={{ __html: stores.address }}></span><br />
                    <a href={stores.googleMapsLink} target="_blank" rel="noopener noreferrer" style={{ color: '#df5014', textDecoration: 'underline' }}>
                        View on Google Maps &rarr;
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Stores;
