import React from 'react';
import config from '../../config/siteConfig.json';

const Franchise = () => {
    const { franchise } = config;

    return (
        <main>
            <section className="franchise-query-section">
                <center><h1>FRANCHISE QUERIES</h1></center>
                <p style={{ fontSize: '1.16rem', maxWidth: '720px', margin: '20px auto 38px auto', textAlign: 'center', color: '#df5014' }}>
                    Want to join the Naturals family and open your own store?
                    Fill the form below and our team will get in touch with you for more information and next steps.
                </p>
                <iframe src={franchise.formLink}
                    width="100%" height="900" frameBorder="0" marginHeight="0" marginWidth="0" style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 2px 16px rgba(0,0,0,0.09)', display: 'block', maxWidth: '900px', margin: '0 auto' }}>
                    Loading…
                </iframe>
                <div style={{ textAlign: 'center', marginTop: '28px', color: '#999' }}>
                    Trouble with the form?
                    <a href={franchise.formLink.replace('?embedded=true', '')} target="_blank" rel="noopener noreferrer" style={{ color: '#df5014', textDecoration: 'underline' }}>Click here to open it directly &rarr;</a>
                </div>
            </section>
        </main>
    );
};

export default Franchise;
