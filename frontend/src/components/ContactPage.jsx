import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Créer le message WhatsApp
    const whatsappMessage = `Bonjour, je suis ${formData.name}.\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/2290158868731?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contactez-Nous</h1>
        <p>Nous sommes là pour répondre à toutes vos questions</p>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Informations de Contact</h2>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h3>Téléphone / WhatsApp</h3>
                <p>+229 01 58 86 8731</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h3>Email</h3>
                <p>contact@elegance-et-saveur.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Adresse</h3>
                <p>Bénin</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div>
                <h3>Horaires</h3>
                <p>Lundi - Samedi: 8h00 - 20h00</p>
                <p>Dimanche: 9h00 - 18h00</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Envoyez-nous un Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                />
              </div>
              <button type="submit" className="submit-btn">
                Envoyer via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="whatsapp-direct">
        <h2>Contact Direct sur WhatsApp</h2>
        <p>Pour une réponse rapide, contactez-nous directement sur WhatsApp</p>
        <a 
          href="https://wa.me/2290158868731" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-btn-large"
        >
          💬 Ouvrir WhatsApp
        </a>
      </section>
    </div>
  );
};

export default ContactPage;
