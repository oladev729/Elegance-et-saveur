import { useState, useEffect } from 'react';
import { getCategories, getProducts } from '../services/api';

const HomePage = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [categoriesData, productsData] = await Promise.all([
        getCategories(),
        getProducts()
      ]);
      setCategories(categoriesData);
      // Prendre les 4 premiers produits comme produits vedettes
      setFeaturedProducts(productsData.slice(0, 4));
    } catch (error) {
      console.error('Erreur chargement données:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (icon) => {
    const icons = {
      perfume: '🌸',
      dress: '👗',
      cake: '🎂',
      food: '🍕'
    };
    return icons[icon] || '📦';
  };

  if (loading) {
    return <div className="loading">Chargement...</div>;
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Elegance et Saveur</h1>
          <p className="hero-subtitle">
            Parfums de qualité, Abayas élégantes, Pâtisserie délicieuse et Cuisine savoureuse
          </p>
          <button 
            className="hero-cta"
            onClick={() => onSelectCategory(null)}
          >
            Découvrir nos produits
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Nos Catégories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="category-card"
              onClick={() => onSelectCategory(category.name)}
            >
              <div className="category-icon">
                {getCategoryIcon(category.icon)}
              </div>
              <h3 className="category-name">
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </h3>
              <p className="category-description">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <h2 className="section-title">Produits Vedettes</h2>
        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="featured-card">
              <div className="featured-image">
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <div className="placeholder-image">
                    {product.category.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="featured-info">
                <h3 className="featured-name">{product.name}</h3>
                <p className="featured-description">{product.description}</p>
                <div className="featured-footer">
                  <span className="featured-price">{product.price.toLocaleString()} FCFA</span>
                  <span className={`featured-quality ${product.quality}`}>
                    {product.quality === 'haut' ? 'Premium' : 'Standard'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="view-all-btn"
          onClick={() => onSelectCategory(null)}
        >
          Voir tous les produits
        </button>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="whatsapp-cta">
        <div className="whatsapp-content">
          <h2 className="whatsapp-title">Commandez sur WhatsApp</h2>
          <p className="whatsapp-text">
            Contactez-nous directement pour passer vos commandes et bénéficier d'un service personnalisé
          </p>
          <a 
            href="https://wa.me/2290158868731" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-btn-large"
          >
            <span className="whatsapp-icon">💬</span>
            Contacter sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
