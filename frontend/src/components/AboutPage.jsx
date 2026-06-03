const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>À Propos de Elegance et Saveur</h1>
          <p>Découvrez notre histoire et notre passion pour l'excellence</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Notre Histoire</h2>
            <p>
              Fondée avec la passion de proposer les meilleurs produits, Elegance et Saveur 
              s'est imposée comme une référence dans la vente de parfums de qualité, d'abayas 
              élégantes, et de produits de pâtisserie et cuisine artisanaux.
            </p>
            <p>
              Notre mission est de vous offrir une expérience unique en combinant l'élégance 
              des parfums et des tenues traditionnelles avec la saveur authentique de nos 
              créations culinaires.
            </p>
          </div>
          <div className="about-image">
            <div className="about-placeholder">
              <span>🌟</span>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Nos Valeurs</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💎</div>
            <h3>Qualité</h3>
            <p>Nous sélectionnons uniquement les meilleurs produits pour garantir votre satisfaction.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Confiance</h3>
            <p>Des relations durables basées sur la transparence et l'honnêteté.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Excellence</h3>
            <p>Un engagement constant vers l'amélioration et la perfection.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💚</div>
            <h3>Passion</h3>
            <p>Notre amour pour ce que nous fait se reflète dans chaque produit.</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🌸 Parfums</h3>
            <p>Une sélection de parfums haut de gamme et moyens gamme pour tous les goûts.</p>
          </div>
          <div className="service-card">
            <h3>👗 Abayas</h3>
            <p>Des robes de prière élégantes et confortables pour toutes les occasions.</p>
          </div>
          <div className="service-card">
            <h3>🎂 Pâtisserie</h3>
            <p>Gâteaux d'anniversaire, croissants, yaourts faits avec amour.</p>
          </div>
          <div className="service-card">
            <h3>🍕 Cuisine</h3>
            <p>Pizza, shawarma et plats cuisinés préparés avec des ingrédients frais.</p>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <h2>Travaillons Ensemble</h2>
        <p>Vous avez des questions ou souhaitez passer commande ? Contactez-nous !</p>
        <a href="https://wa.me/2290158868731" target="_blank" rel="noopener noreferrer" className="whatsapp-cta-btn">
          💬 Contactez-nous sur WhatsApp
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
