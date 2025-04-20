import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>ACADI Bénin</h3>
            <p>Association pour la Coopération et le Développement International, œuvrant pour le développement durable au Bénin.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span className="material-icons">facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <span className="material-icons">twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span className="material-icons">linkedin</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span className="material-icons">instagram</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Liens Rapides</h3>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/projects">Nos projets</Link></li>
              <li><Link to="/donate">Faire un don</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact</h3>
            <p><span className="material-icons">location_on</span> 123 Rue Exemple, Cotonou, Bénin</p>
            <p><span className="material-icons">phone</span> +229 97123456</p>
            <p><span className="material-icons">email</span> contact@acadibenin.org</p>
          </div>
          
          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Inscrivez-vous pour recevoir nos actualités</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Votre email" required />
              <button type="submit" className="btn">S'inscrire</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} ACADI Bénin. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

