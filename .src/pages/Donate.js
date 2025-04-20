import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    mobileMoneyNumber: '',
    mobileMoneyProvider: 'mtn'
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleAmountSelection = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would process the payment here
    setShowThankYou(true);
    window.scrollTo(0, 0);
  };

  const handleNewDonation = () => {
    setShowThankYou(false);
    setDonationAmount(null);
    setCustomAmount('');
    setDonationType('one-time');
    setPaymentMethod('card');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      cardNumber: '',
      cardExpiry: '',
      cardCVC: '',
      mobileMoneyNumber: '',
      mobileMoneyProvider: 'mtn'
    });
  };

  const actualAmount = donationAmount || (customAmount ? parseInt(customAmount, 10) : 0);

  if (showThankYou) {
    return (
      <div className="donate-page">
        <div className="thank-you-container">
          <div className="thank-you-card">
            <span className="material-icons thank-you-icon">favorite</span>
            <h1>Merci pour votre don !</h1>
            <p>Votre générosité fait une différence réelle pour les communautés que nous servons.</p>
            <div className="donation-summary">
              <h3>Récapitulatif de votre don</h3>
              <p><strong>Montant :</strong> {actualAmount} €</p>
              <p><strong>Type de don :</strong> {donationType === 'one-time' ? 'Ponctuel' : 'Mensuel'}</p>
              <p><strong>Méthode de paiement :</strong> {paymentMethod === 'card' ? 'Carte bancaire' : 'Mobile Money'}</p>
            </div>
            <p>Un reçu a été envoyé à votre adresse email : {formData.email}</p>
            <button className="btn" onClick={handleNewDonation}>Faire un autre don</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="container">
          <h1>Faites un don</h1>
          <p>Votre soutien permet à ACADI Bénin de continuer ses actions pour un développement durable</p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="donation-form-section">
        <div className="container">
          <div className="donation-content">
            <div className="donation-info">
              <h2>Pourquoi donner ?</h2>
              <p>Votre don permet de financer des projets essentiels pour améliorer la vie des communautés béninoises :</p>
              <ul className="donation-impact-list">
                <li><span className="material-icons">water_drop</span> 10€ = Accès à l'eau potable pour une personne pendant 1 mois</li>
                <li><span className="material-icons">school</span> 20€ = Matériel scolaire pour un enfant pendant 1 an</li>
                <li><span className="material-icons">medical_services</span> 50€ = Soins de santé pour une famille pendant 3 mois</li>
                <li><span className="material-icons">agriculture</span> 100€ = Formation agricole complète pour un agriculteur</li>
              </ul>
              
              <div className="tax-info">
                <h3>Avantages fiscaux</h3>
                <p>66% de votre don est déductible de vos impôts dans la limite de 20% de votre revenu imposable. Un reçu fiscal vous sera envoyé.</p>
              </div>
            </div>

            <div className="donation-form-container">
              <form className="donation-form" onSubmit={handleSubmit}>
                <h3>Votre don</h3>
                
                {/* Donation Amount */}
                <div className="form-group">
                  <label>Montant du don</label>
                  <div className="amount-options">
                    <button 
                      type="button" 
                      className={`amount-btn ${donationAmount === 10 ? 'active' : ''}`}
                      onClick={() => handleAmountSelection(10)}
                    >
                      10 €
                    </button>
                    <button 
                      type="button" 
                      className={`amount-btn ${donationAmount === 20 ? 'active' : ''}`}
                      onClick={() => handleAmountSelection(20)}
                    >
                      20 €
                    </button>
                    <button 
                      type="button" 
                      className={`amount-btn ${donationAmount === 50 ? 'active' : ''}`}
                      onClick={() => handleAmountSelection(50)}
                    >
                      50 €
                    </button>
                    <button 
                      type="button" 
                      className={`amount-btn ${donationAmount === 100 ? 'active' : ''}`}
                      onClick={() => handleAmountSelection(100)}
                    >
                      100 €
                    </button>
                  </div>
                  <div className="custom-amount">
                    <input 
                      type="number" 
                      placeholder="Autre montant" 
                      value={customAmount}
                      onChange={handleCustomAmount}
                      min="1"
                    />
                    <span className="currency">€</span>
                  </div>
                </div>
                
                {/* Donation Type */}
                <div className="form-group">
                  <label>Type de don</label>
                  <div className="donation-type">
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="donationType" 
                        value="one-time" 
                        checked={donationType === 'one-time'}
                        onChange={() => setDonationType('one-time')}
                      />
                      <span>Don ponctuel</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="donationType" 
                        value="monthly" 
                        checked={donationType === 'monthly'}
                        onChange={() => setDonationType('monthly')}
                      />
                      <span>Don mensuel</span>
                    </label>
                  </div>
                </div>
                
                {/* Personal Information */}
                <h3>Vos informations</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Prénom</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Nom</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
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
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="address">Adresse</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">Ville</label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city" 
                      value={formData.city}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Pays</label>
                    <input 
                      type="text" 
                      id="country" 
                      name="country" 
                      value={formData.country}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                {/* Payment Method */}
                <h3>Méthode de paiement</h3>
                <div className="form-group">
                  <div className="payment-methods">
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="card" 
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                      />
                      <span>Carte bancaire</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="mobile" 
                        checked={paymentMethod === 'mobile'}
                        onChange={() => setPaymentMethod('mobile')}
                      />
                      <span>Mobile Money</span>
                    </label>
                  </div>
                </div>
                
                {/* Card Payment Fields */}
                {paymentMethod === 'card' && (
                  <div className="card-payment">
                    <div className="form-group">
                      <label htmlFor="cardNumber">Numéro de carte</label>
                      <input 
                        type="text" 
                        id="cardNumber" 
                        name="cardNumber" 
                        placeholder="1234 5678 9012 3456" 
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="cardExpiry">Date d'expiration</label>
                        <input 
                          type="text" 
                          id="cardExpiry" 
                          name="cardExpiry" 
                          placeholder="MM/AA" 
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardCVC">CVC</label>
                        <input 
                          type="text" 
                          id="cardCVC" 
                          name="cardCVC" 
                          placeholder="123" 
                          value={formData.cardCVC}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Mobile Money Fields */}
                {paymentMethod === 'mobile' && (
                  <div className="mobile-payment">
                    <div className="form-group">
                      <label htmlFor="mobileMoneyProvider">Opérateur</label>
                      <select 
                        id="mobileMoneyProvider" 
                        name="mobileMoneyProvider" 
                        value={formData.mobileMoneyProvider}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="mtn">MTN Mobile Money</option>
                        <option value="orange">Orange Money</option>
                        <option value="moov">Moov Money</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobileMoneyNumber">Numéro Mobile Money</label>
                      <input 
                        type="tel" 
                        id="mobileMoneyNumber" 
                        name="mobileMoneyNumber" 
                        placeholder="Ex: 97123456" 
                        value={formData.mobileMoneyNumber}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                )}
                
                {/* Submit Button */}
                <div className="form-group submit-group">
                  <p className="donation-total">
                    Total : <strong>{actualAmount || 0} €</strong>
                    {donationType === 'monthly' && <span> / mois</span>}
                  </p>
                  <button 
                    type="submit" 
                    className="btn submit-btn" 
                    disabled={!actualAmount}
                  >
                    Confirmer le don
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="donation-info-section">
        <div className="container">
          <div className="transparency-info">
            <h2>Transparence financière</h2>
            <p>ACADI Bénin s'engage à utiliser vos dons de manière efficace et transparente. Notre rapport financier annuel est disponible sur demande.</p>
            <div className="donation-allocation">
              <div className="allocation-item">
                <div className="allocation-percentage" style={{ width: '80%' }}>80%</div>
                <p>Projets terrain</p>
              </div>
              <div className="allocation-item">
                <div className="allocation-percentage" style={{ width: '12%' }}>12%</div>
                <p>Fonctionnement</p>
              </div>
              <div className="allocation-item">
                <div className="allocation-percentage" style={{ width: '8%' }}>8%</div>
                <p>Communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;

