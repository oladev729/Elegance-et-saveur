const LegalPage = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <h1>Mentions Légales</h1>
        <p>Informations légales et conditions d'utilisation</p>
      </section>

      <section className="legal-content">
        <div className="legal-container">
          <div className="legal-section">
            <h2>1. Éditeur du Site</h2>
            <p>
              Le site Elegance et Saveur est édité par :
            </p>
            <ul>
              <li><strong>Nom :</strong> Elegance et Saveur</li>
              <li><strong>Adresse :</strong> Bénin</li>
              <li><strong>Téléphone :</strong> +229 01 58 86 8731</li>
              <li><strong>Email :</strong> contact@elegance-et-saveur.com</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>2. Hébergement</h2>
            <p>
              Ce site est hébergé par GitHub Pages, service d'hébergement web fourni par GitHub, Inc.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Propriété Intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, vidéos) est protégé par le droit d'auteur. 
              Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Données Personnelles</h2>
            <p>
              Les données personnelles collectées (nom, email, téléphone) sont utilisées uniquement pour 
              le traitement de vos commandes et la communication avec vous. Nous ne partageons pas vos 
              données avec des tiers sans votre consentement.
            </p>
            <p>
              Conformément à la législation sur la protection des données personnelles, vous disposez d'un 
              droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, 
              contactez-nous via WhatsApp ou email.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont 
              de petits fichiers stockés sur votre appareil qui nous permettent de reconnaître votre 
              navigateur et de mémoriser vos préférences.
            </p>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter 
              certaines fonctionnalités du site.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Conditions de Vente</h2>
            <p>
              Les commandes sont passées via WhatsApp et sont confirmées par notre équipe. Les prix sont 
              indiqués en FCFA et sont susceptibles de varier. Les frais de livraison sont calculés selon 
              votre zone de livraison.
            </p>
            <p>
              Le paiement s'effectue via Mobile Money, virement bancaire ou espèces à la livraison. 
              En raison de la nature de nos produits (alimentation et cosmétiques), nous n'acceptons pas 
              les retours.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Responsabilité</h2>
            <p>
              Elegance et Saveur s'efforce de fournir des informations exactes et à jour sur ce site. 
              Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des 
              informations fournies.
            </p>
            <p>
              Nous déclinons toute responsabilité pour les dommages directs ou indirects résultant 
              de l'utilisation de ce site ou de l'impossibilité d'utiliser ce site.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Loi Applicable</h2>
            <p>
              Les présentes mentions légales sont régies par la loi béninoise. Tout litige relatif à 
              l'utilisation de ce site sera soumis à la compétence des tribunaux béninois.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
            </p>
            <ul>
              <li>Par WhatsApp : +229 01 58 86 8731</li>
              <li>Par email : contact@elegance-et-saveur.com</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>10. Mise à Jour</h2>
            <p>
              Elegance et Saveur se réserve le droit de modifier ces mentions légales à tout moment. 
              Les modifications prendront effet dès leur publication sur le site.
            </p>
            <p className="last-update">
              Dernière mise à jour : Juin 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
