'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Tokyo<span className="logo-accent">Fit Meals</span>
        </a>

        <div className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('menu'); }}>Menu</a>
          <a href="#packages" onClick={(e) => { e.preventDefault(); scrollTo('packages'); }}>Health Plans</a>
          <a href="#plans" onClick={(e) => { e.preventDefault(); scrollTo('plans'); }}>Pricing</a>
          <a href="#nutrition" onClick={(e) => { e.preventDefault(); scrollTo('nutrition'); }}>Our Promise</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}>FAQ</a>
        </div>

        <div className="navbar-cta" style={{ display: mobileMenuOpen ? 'none' : 'flex' }}>
          <button className="btn btn-primary btn-sm" onClick={() => scrollTo('plans')}>
            Start Your Plan →
          </button>
        </div>

        <button 
          className="mobile-menu-btn" 
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </div>
    </nav>
  );
}
