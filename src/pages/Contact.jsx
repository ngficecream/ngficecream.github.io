import React from 'react';
import config from '../../config/siteConfig.json';

const Contact = () => {
    const { contact } = config;

    return (
        <main>
            <section className="contact-section" style={{ padding: '2.2rem 1rem' }}>
                <center><h1>CONTACT US</h1></center>
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 38px auto' }}>
                    <p style={{ fontSize: '1.18rem', marginBottom: '18px', color: '#df5014' }}>
                        For any queries, feedback, or suggestions, feel free to reach out to us.<br />
                        We’re always happy to help—with a smile!
                    </p>
                    <div className="contact-details" style={{ marginBottom: '28px' }}>
                        <div style={{ margin: '14px 0', fontSize: '1.06rem' }}>
                            <i className="fa fa-phone" style={{ color: '#df5014', marginRight: '7px' }}></i>
                            <b>Contact Number:</b> <a href={`tel:${contact.phone}`} style={{ color: '#232323', textDecoration: 'none' }}>{contact.phone}</a>
                        </div>
                        <div style={{ margin: '14px 0', fontSize: '1.06rem' }}>
                            <i className="fa fa-envelope" style={{ color: '#df5014', marginRight: '7px' }}></i>
                            <b>Email:</b> <a href={`mailto:${contact.email}`} style={{ color: '#232323', textDecoration: 'none' }}>{contact.email}</a>
                        </div>
                        <div style={{ margin: '18px 0 0 0', fontSize: '1.06rem' }}>
                            <i className="fa fa-map-marker-alt" style={{ color: '#df5014', marginRight: '7px' }}></i>
                            <b>Address:</b><br />
                            <span dangerouslySetInnerHTML={{ __html: contact.address }}></span>
                        </div>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <a href={contact.googleMapsLink} target="_blank" rel="noopener noreferrer" style={{ color: '#df5014', textDecoration: 'underline', fontWeight: '500' }}>
                            View our location on Google Maps &rarr;
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
