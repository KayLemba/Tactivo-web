import React, { useState } from 'react';
import LogoMark from './Logo';

function Footer() {
  const [status, setStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setStatus('Thanks — this form is not yet connected. Add newsletter handling before going live.');
  };

  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-col footer-about">
          <div className="footer-brand">
            <LogoMark />
            <span className="brand-name">TACTIVO <span>TECHNOLOGIES</span></span>
          </div>
          <p>
            Integrated fuel infrastructure and IT systems, engineered for filling stations,
            logistics, and industrial operations across Zambia.
          </p>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#maestro">Maestro</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <a href="#services">Forecourt Solutions</a>
          <a href="#services">IT Solutions</a>
          <a href="#services">Fuel Automation</a>
          <a href="#services">Surveillance &amp; Access Control</a>
        </div>

        <div className="footer-col footer-newsletter">
          <h5>Newsletter</h5>
          <p>Get updates on new Tactivo systems and releases.</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input type="email" placeholder="Your email" required aria-label="Email address" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <p className="form-status">{status}</p>
        </div>
      </div>

      <div className="wrap footer-row">
        <p>© {new Date().getFullYear()} Tactivo Technologies. Lusaka, Zambia.</p>
        <div className="footer-links">
          <span className="placeholder-note">tactivotechnologies@gmail.com &amp; +260973238632 </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
