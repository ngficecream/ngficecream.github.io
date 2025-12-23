import React from 'react';
import config from '../../config/siteConfig.json';

const Footer = () => {
    const { footer, navbar } = config;

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-about" dangerouslySetInnerHTML={{ __html: footer.about }}>
                </div>
                <div className="footer-nav">
                    {navbar.links.slice(1).map((link, idx) => (
                        <React.Fragment key={idx}>
                            <a href={link.path}>{link.label}</a>
                            {idx < navbar.links.length - 2 && ' | '}
                        </React.Fragment>
                    ))}
                </div>
                <div className="footer-socials">
                    <a href={footer.socials.instagram} title="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href={footer.socials.facebook} title="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href={footer.socials.whatsapp} title="Whatsapp"><i className="fab fa-whatsapp"></i></a>
                    <a href="#" title="Website"><i className="fab fa-chrome"></i></a>
                </div>
                <div className="footer-rights">
                    &copy; 2025 Natural Gugrati Ice Creams.
                    <p>Developed by <a href="https://www.warriorwhocodes.com">Warrior Who Codes</a> All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
