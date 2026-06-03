const { getDb } = require('../database');

// Récupérer tous les produits
const getAllProducts = (req, res) => {
  const db = getDb();
  const { category } = req.query;
  
  let query = 'SELECT * FROM products';
  let params = [];
  
  if (category) {
    query += ' WHERE category = ?';
    params.push(category);
  }
  
  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ products: rows });
  });
};

// Récupérer un produit par ID
const getProductById = (req, res) => {
  const db = getDb();
  const { id } = req.params;
  
  db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Produit non trouvé' });
      return;
    }
    res.json({ product: row });
  });
};

// Créer un nouveau produit
const createProduct = (req, res) => {
  const db = getDb();
  const { name, description, price, category, subcategory, quality, image, stock } = req.body;
  
  const query = `
    INSERT INTO products (name, description, price, category, subcategory, quality, image, stock)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  db.run(query, [name, description, price, category, subcategory, quality, image, stock || 0], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ 
      message: 'Produit créé avec succès', 
      productId: this.lastID 
    });
  });
};

// Mettre à jour un produit
const updateProduct = (req, res) => {
  const db = getDb();
  const { id } = req.params;
  const { name, description, price, category, subcategory, quality, image, stock } = req.body;
  
  const query = `
    UPDATE products 
    SET name = ?, description = ?, price = ?, category = ?, subcategory = ?, quality = ?, image = ?, stock = ?
    WHERE id = ?
  `;
  
  db.run(query, [name, description, price, category, subcategory, quality, image, stock, id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Produit non trouvé' });
      return;
    }
    res.json({ message: 'Produit mis à jour avec succès' });
  });
};

// Supprimer un produit
const deleteProduct = (req, res) => {
  const db = getDb();
  const { id } = req.params;
  
  db.run('DELETE FROM products WHERE id = ?', [id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Produit non trouvé' });
      return;
    }
    res.json({ message: 'Produit supprimé avec succès' });
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
