import { useState, useEffect } from 'react';
import { getCategories } from '../services/api';

const CategoryList = ({ onSelectCategory, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Erreur chargement catégories:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Chargement des catégories...</div>;
  }

  return (
    <div className="category-list">
      <button
        className={`category-btn ${!selectedCategory ? 'active' : ''}`}
        onClick={() => onSelectCategory(null)}
      >
        Tous les produits
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-btn ${selectedCategory === category.name ? 'active' : ''}`}
          onClick={() => onSelectCategory(category.name)}
        >
          {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
