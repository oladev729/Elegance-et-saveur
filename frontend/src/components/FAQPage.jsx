import { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment passer une commande ?",
      answer: "Vous pouvez passer commande directement via WhatsApp en cliquant sur le bouton 'Commander sur WhatsApp' sur chaque produit, ou en utilisant notre formulaire de contact. Nous traiterons votre commande rapidement."
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer: "Nous acceptons les paiements via Mobile Money (Orange Money, MTN Mobile Money), virement bancaire, et espèces à la livraison."
    },
    {
      question: "Quelle est la zone de livraison ?",
      answer: "Nous livrons dans tout le Bénin. Les frais de livraison varient selon votre localisation. Contactez-nous pour plus d'informations."
    },
    {
      question: "Combien de temps faut-il pour recevoir ma commande ?",
      answer: "Pour les produits en stock, la livraison se fait généralement dans les 24-48h. Pour les commandes spéciales (gâteaux personnalisés), veuillez nous contacter 2-3 jours à l'avance."
    },
    {
      question: "Les parfums sont-ils authentiques ?",
      answer: "Oui, tous nos parfums sont 100% authentiques. Nous proposons à la fois des parfums de marque haut de gamme et des alternatives de qualité moyenne."
    },
    {
      question: "Puis-je personnaliser mon gâteau d'anniversaire ?",
      answer: "Absolument ! Contactez-nous via WhatsApp pour discuter de vos préférences : goût, décoration, taille, message personnalisé, etc."
    },
    {
      question: "Quelle est la politique de retour ?",
      answer: "En raison de la nature de nos produits (alimentation et cosmétiques), nous n'acceptons pas les retours. Cependant, si un produit est défectueux, contactez-nous immédiatement pour une solution."
    },
    {
      question: "Comment puis-je suivre ma commande ?",
      answer: "Vous recevirez des mises à jour régulières via WhatsApp tout au long du processus de commande et de livraison."
    },
    {
      question: "Faites-vous des livraisons le dimanche ?",
      answer: "Oui, nous livrons également le dimanche, mais avec des horaires réduits (9h00 - 18h00). Les commandes passées le samedi soir peuvent être livrées le dimanche."
    },
    {
      question: "Puis-je annuler ma commande ?",
      answer: "Les annulations sont possibles jusqu'à 2 heures avant la livraison prévue. Contactez-nous immédiatement si vous devez annuler."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <h1>Questions Fréquemment Posées</h1>
        <p>Tout ce que vous devez savoir sur nos services</p>
      </section>

      <section className="faq-content">
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="faq-contact">
        <h2>Vous ne trouvez pas votre réponse ?</h2>
        <p>Nous sommes là pour vous aider ! Contactez-nous directement.</p>
        <a 
          href="https://wa.me/2290158868731" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-btn-large"
        >
          💬 Poser une question sur WhatsApp
        </a>
      </section>
    </div>
  );
};

export default FAQPage;
