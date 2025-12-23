import React from 'react';
import config from '../../config/siteConfig.json';

const About = () => {
    const { about } = config;

    return (
        <main>
            <section className="trust-story-section" style={{ padding: '2.5rem 1rem 2.2rem 1rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ textAlign: 'center', color: '#df5014', marginBottom: '0.9rem' }}>{about.title.split('|')[0]} <span style={{ color: '#b3661d' }}>|</span> {about.title.split('|')[1]}</h1>

                    <p style={{ textAlign: 'center', fontSize: '1.32rem', maxWidth: '650px', margin: '0 auto 2.2rem auto', color: '#ca7305' }}>
                        {about.subtitle}
                    </p>

                    <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#222', maxWidth: '720px', margin: '0 auto', background: '#fff8ed', borderRadius: '14px', padding: '2.1rem 1.6rem 2.1rem 1.6rem', boxShadow: '0 2px 24px rgba(220,130,40,0.06)' }}>
                        {about.paragraphs.map((p, idx) => (
                            <p key={idx} dangerouslySetInnerHTML={{ __html: p }}>
                            </p>
                        ))}
                        <p style={{ color: '#df5014', textAlign: 'center', fontSize: '1.18em', marginTop: '2.0rem' }}>
                            "{about.quote}"
                            <br />— <i>{about.author}</i>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
