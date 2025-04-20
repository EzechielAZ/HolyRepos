import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>ACADI Bénin</h1>
        </Link>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu principal"
        >
          <span className="material-icons">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
        
        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>À propos</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Nos projets</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            <li><Link to="/donate" className="btn donate-btn">Faire un don</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

