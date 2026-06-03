const { getDb } = require('../database');

// Créer une nouvelle commande
const createOrder = (req, res) => {
  const db = getDb();
  const { customer_name, customer_email, customer_phone, whatsapp_number, delivery_address, items, notes } = req.body;
  
  // Calculer le total
  const total_amount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const orderQuery = `
    INSERT INTO orders (customer_name, customer_email, customer_phone, whatsapp_number, delivery_address, total_amount, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  
  db.run(orderQuery, [customer_name, customer_email, customer_phone, whatsapp_number, delivery_address, total_amount, notes], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    const orderId = this.lastID;
    
    // Insérer les articles de la commande
    const itemQuery = `
      INSERT INTO order_items (order_id, product_id, product_name, quantity, price)
      VALUES (?, ?, ?, ?, ?)
    `;
    
    items.forEach(item => {
      db.run(itemQuery, [orderId, item.product_id, item.product_name, item.quantity, item.price], (err) => {
        if (err) console.error('Erreur insertion article:', err.message);
      });
    });
    
    res.status(201).json({ 
      message: 'Commande créée avec succès', 
      orderId: orderId,
      total_amount: total_amount
    });
  });
};

// Récupérer toutes les commandes
const getAllOrders = (req, res) => {
  const db = getDb();
  
  db.all('SELECT * FROM orders ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ orders: rows });
  });
};

// Récupérer une commande par ID avec ses articles
const getOrderById = (req, res) => {
  const db = getDb();
  const { id } = req.params;
  
  db.get('SELECT * FROM orders WHERE id = ?', [id], (err, order) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!order) {
      res.status(404).json({ error: 'Commande non trouvée' });
      return;
    }
    
    // Récupérer les articles de la commande
    db.all('SELECT * FROM order_items WHERE order_id = ?', [id], (err, items) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ order: { ...order, items } });
    });
  });
};

// Mettre à jour le statut d'une commande
const updateOrderStatus = (req, res) => {
  const db = getDb();
  const { id } = req.params;
  const { status } = req.body;
  
  db.run('UPDATE orders SET status = ? WHERE id = ?', [status, id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Commande non trouvée' });
      return;
    }
    res.json({ message: 'Statut de la commande mis à jour avec succès' });
  });
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus
};
