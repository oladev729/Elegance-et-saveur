import { useState, useEffect } from 'react';
import { getProducts, getWhatsAppUrl } from '../services/api';

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, [category]);

  const loadProducts = async () => {
    try {
      const data = await getProducts(category);
      setProducts(data);
    } catch (error) {
      console.error('Erreur chargement produits:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppOrder = async (product) => {
    try {
      const message = `Bonjour, je souhaite commander : ${product.name} - Prix: ${product.price} FCFA`;
      const whatsappUrl = await getWhatsAppUrl(message);
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      console.error('Erreur WhatsApp:', error);
    }
  };

  if (loading) {
    return <div className="loading">Chargement des produits...</div>;
  }

  if (products.length === 0) {
    return <div className="no-products">Aucun produit disponible dans cette catégorie.</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            {product.image ? (
              <img src={product.image} alt={product.name} />
            ) : (
              <div className="placeholder-image">
                {product.category.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-details">
              <span className="product-category">{product.category}</span>
              {product.quality && (
                <span className={`product-quality ${product.quality}`}>
                  {product.quality === 'haut' ? 'Premium' : 'Standard'}
                </span>
              )}
            </div>
            <div className="product-footer">
              <span className="product-price">{product.price.toLocaleString()} FCFA</span>
              <button
                className="whatsapp-btn"
                onClick={() => handleWhatsAppOrder(product)}
              >
                Commander sur WhatsApp
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
