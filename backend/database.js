const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'elegance.db');
let db;

// Initialisation de la base de données
function initDatabase() {
  db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données:', err.message);
    } else {
      console.log('Connecté à la base de données SQLite');
      createTables();
    }
  });
}

// Création des tables
function createTables() {
  const createProductsTable = `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      category TEXT NOT NULL,
      subcategory TEXT,
      quality TEXT,
      image TEXT,
      stock INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const createCategoriesTable = `
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      description TEXT,
      icon TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const createOrdersTable = `
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_name TEXT NOT NULL,
      customer_email TEXT,
      customer_phone TEXT NOT NULL,
      whatsapp_number TEXT,
      delivery_address TEXT,
      total_amount REAL NOT NULL,
      status TEXT DEFAULT 'pending',
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const createOrderItemsTable = `
    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL,
      product_id INTEGER NOT NULL,
      product_name TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      price REAL NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
    )
  `;

  db.serialize(() => {
    db.run(createProductsTable, (err) => {
      if (err) console.error('Erreur création table products:', err.message);
    });

    db.run(createCategoriesTable, (err) => {
      if (err) console.error('Erreur création table categories:', err.message);
    });

    db.run(createOrdersTable, (err) => {
      if (err) console.error('Erreur création table orders:', err.message);
    });

    db.run(createOrderItemsTable, (err) => {
      if (err) console.error('Erreur création table order_items:', err.message);
    });

    // Insérer les catégories par défaut après la création des tables
    insertDefaultCategories();
  });
}

// Insérer les catégories par défaut
function insertDefaultCategories() {
  const categories = [
    { name: 'parfums', description: 'Parfums de qualité haut et moyens', icon: 'perfume' },
    { name: 'abayas', description: 'Robes de prière (abaya)', icon: 'dress' },
    { name: 'patisserie', description: 'Gâteaux, croissants, yaourts', icon: 'cake' },
    { name: 'cuisine', description: 'Pizza, shawarma, plats cuisinés', icon: 'food' }
  ];

  const insertCategory = `INSERT OR IGNORE INTO categories (name, description, icon) VALUES (?, ?, ?)`;
  
  categories.forEach(cat => {
    db.run(insertCategory, [cat.name, cat.description, cat.icon], (err) => {
      if (err) console.error('Erreur insertion catégorie:', err.message);
    });
  });
}

module.exports = {
  initDatabase,
  getDb: () => db
};
