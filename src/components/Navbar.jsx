import React from 'react';
import '../assets/css/style.css';
import config from '../../config/siteConfig.json';

const Navbar = () => {
  const toggleMenu = () => {
    document.querySelector('.nav-links').classList.toggle('open');
  };

  const { navbar } = config;

  return (
    <header>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={navbar.logo} style={{ height: '110px' }} alt="Logo" />
        </a>
        <ul className="nav-links">
          {navbar.links.map((link, idx) => (
            <li key={idx}><a href={link.path}>{link.label}</a></li>
          ))}
          <li><a href={navbar.cta.url} className="cta">{navbar.cta.label}</a></li>
        </ul>
        <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>&#9776;</div>
      </nav>
    </header>
  );
};

export default Navbar;
