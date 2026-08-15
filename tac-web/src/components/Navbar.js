import React, { useEffect, useState } from 'react';
import LogoMark from './Logo';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="wrap">
        <a href="#top" className="brand">
          <LogoMark />
          <span className="brand-name">TACTIVO <span>TECHNOLOGIES</span></span>
        </a>
        <ul className={`nav-links${navOpen ? ' open' : ''}`}>
          <li><a href="#about" onClick={closeNav}>About</a></li>
          <li><a href="#services" onClick={closeNav}>Services</a></li>
          <li><a href="#maestro" onClick={closeNav}>Maestro</a></li>
          <li><a href="#contact" className="nav-cta" onClick={closeNav}>Get in Touch</a></li>
          <li className="theme-toggle-mobile">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>
        <button
          type="button"
          className="theme-toggle theme-toggle-desktop"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setNavOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  );
}

export default Navbar;
