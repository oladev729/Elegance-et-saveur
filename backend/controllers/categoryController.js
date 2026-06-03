const { getDb } = require('../database');

// Récupérer toutes les catégories
const getAllCategories = (req, res) => {
  const db = getDb();
  
  db.all('SELECT * FROM categories', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ categories: rows });
  });
};

// Récupérer une catégorie par ID
const getCategoryById = (req, res) => {
  const db = getDb();
  const { id } = req.params;
  
  db.get('SELECT * FROM categories WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Catégorie non trouvée' });
      return;
    }
    res.json({ category: row });
  });
};

// Créer une nouvelle catégorie
const createCategory = (req, res) => {
  const db = getDb();
  const { name, description, icon } = req.body;
  
  const query = 'INSERT INTO categories (name, description, icon) VALUES (?, ?, ?)';
  
  db.run(query, [name, description, icon], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ 
      message: 'Catégorie créée avec succès', 
      categoryId: this.lastID 
    });
  });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory
};
