const DeliveryPage = () => {
  return (
    <div className="delivery-page">
      <section className="delivery-hero">
        <h1>Livraison & Informations</h1>
        <p>Tout ce que vous devez savoir sur nos services de livraison</p>
      </section>

      <section className="delivery-section">
        <div className="delivery-container">
          <div className="delivery-info">
            <h2>🚚 Zones de Livraison</h2>
            <div className="delivery-zones">
              <div className="zone-card">
                <h3>Cotonou</h3>
                <p>Livraison le jour même</p>
                <p className="price">500 FCFA</p>
              </div>
              <div className="zone-card">
                <h3>Porto-Novo</h3>
                <p>Livraison en 24-48h</p>
                <p className="price">1000 FCFA</p>
              </div>
              <div className="zone-card">
                <h3>Parakou</h3>
                <p>Livraison en 48-72h</p>
                <p className="price">2000 FCFA</p>
              </div>
              <div className="zone-card">
                <h3>Autres villes</h3>
                <p>Livraison en 3-5 jours</p>
                <p className="price">Sur devis</p>
              </div>
            </div>
          </div>

          <div className="delivery-process">
            <h2>📋 Processus de Commande</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Sélection</h3>
                  <p>Choisissez vos produits sur notre site</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Commande</h3>
                  <p>Contactez-nous via WhatsApp pour passer commande</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Confirmation</h3>
                  <p>Nous confirmons votre commande et le montant total</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Paiement</h3>
                  <p>Effectuez le paiement (Mobile Money, virement, espèces)</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Livraison</h3>
                  <p>Recevez vos produits à l'adresse indiquée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="payment-section">
        <h2>💳 Modes de Paiement</h2>
        <div className="payment-methods">
          <div className="payment-card">
            <h3>📱 Mobile Money</h3>
            <p>Orange Money, MTN Mobile Money, Moov Money</p>
            <p className="payment-note">Le plus rapide et le plus pratique</p>
          </div>
          <div className="payment-card">
            <h3>🏦 Virement Bancaire</h3>
            <p>Virement direct sur notre compte bancaire</p>
                <p className="payment-note">Pour les commandes importantes</p>
          </div>
          <div className="payment-card">
            <h3>💵 Espèces</h3>
            <p>Paiement à la livraison</p>
            <p className="payment-note">Disponible à Cotonou et Porto-Novo</p>
          </div>
        </div>
      </section>

      <section className="policies-section">
        <h2>📜 Politiques</h2>
        <div className="policies-grid">
          <div className="policy-card">
            <h3>⏰ Délais de Livraison</h3>
            <p>Les produits en stock sont livrés dans les 24-48h. Pour les commandes spéciales (gâteaux personnalisés), prévoyez 2-3 jours.</p>
          </div>
          <div className="policy-card">
            <h3>🔄 Retours</h3>
            <p>En raison de la nature de nos produits, nous n'acceptons pas les retours. Contactez-nous en cas de produit défectueux.</p>
          </div>
          <div className="policy-card">
            <h3>❌ Annulations</h3>
            <p>Les annulations sont possibles jusqu'à 2 heures avant la livraison prévue. Contactez-nous immédiatement.</p>
          </div>
          <div className="policy-card">
            <h3>📦 Emballage</h3>
            <p>Tous nos produits sont emballés avec soin pour garantir leur fraîcheur et leur intégrité lors du transport.</p>
          </div>
        </div>
      </section>

      <section className="delivery-contact">
        <h2>Questions sur la livraison ?</h2>
        <p>Contactez-nous pour plus d'informations ou pour une commande spéciale</p>
        <a 
          href="https://wa.me/2290158868731" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-btn-large"
        >
          💬 Nous contacter sur WhatsApp
        </a>
      </section>
    </div>
  );
};

export default DeliveryPage;
