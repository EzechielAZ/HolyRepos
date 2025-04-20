import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    // For this demo, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contactez-nous</h1>
          <p>Nous sommes à votre écoute pour toute question ou demande d'information</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <span className="material-icons">location_on</span>
              <h3>Notre adresse</h3>
              <p>123 Rue Exemple, Cotonou</p>
              <p>République du Bénin</p>
            </div>
            
            <div className="contact-card">
              <span className="material-icons">call</span>
              <h3>Téléphone</h3>
              <p>+229 97123456</p>
              <p>+229 95789012</p>
            </div>
            
            <div className="contact-card">
              <span className="material-icons">email</span>
              <h3>Email</h3>
              <p>contact@acadibenin.org</p>
              <p>info@acadibenin.org</p>
            </div>
            
            <div className="contact-card">
              <span className="material-icons">schedule</span>
              <h3>Horaires d'ouverture</h3>
              <p>Lundi - Vendredi : 8h - 17h</p>
              <p>Samedi : 9h - 12h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            <div className="map-container">
              <h2>Localisation</h2>
              <div className="map">
                {/* In a real application, you would include a Google Maps or other map service */}
                <div className="placeholder-map">
                  <span className="material-icons">map</span>
                  <p>Carte interactive indisponible en démo</p>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Suivez-nous</h3>
                <div className="social-icons">
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
            </div>
            
            <div className="form-container">
              <h2>Envoyez-nous un message</h2>
              {formStatus.submitted ? (
                <div className="form-success-message">
                  <span className="material-icons">check_circle</span>
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Téléphone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Sujet *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="6" 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn submit-btn">Envoyer le message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Questions fréquentes</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3>Comment puis-je devenir bénévole pour ACADI ?</h3>
              <p>Vous pouvez devenir bénévole en nous envoyant un email à benevole@acadibenin.org avec votre CV et une lettre de motivation. Nous vous recontacterons pour discuter des opportunités disponibles.</p>
            </div>
            
            <div className="faq-item">
              <h3>Est-ce que je peux faire un don matériel ?</h3>
              <p>Oui, nous acceptons les dons matériels tels que des fournitures scolaires, des équipements médicaux, etc. Veuillez nous contacter pour organiser la livraison ou le ramassage.</p>
            </div>
            
            <div className="faq-item">
              <h3>Comment puis-je proposer un partenariat ?</h3>
              <p>Pour proposer un partenariat, veuillez nous contacter par email à partenariat@acadibenin.org avec une description de votre organisation et votre proposition de collaboration.</p>
            </div>
            
            <div className="faq-item">
              <h3>Où puis-je trouver votre rapport annuel ?</h3>
              <p>Nos rapports annuels sont disponibles sur demande. Veuillez nous envoyer un email à info@acadibenin.org pour recevoir une copie.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

