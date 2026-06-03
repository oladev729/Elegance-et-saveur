const database = require('./database');

// Données de test pour les produits
const sampleProducts = [
  // Parfums
  {
    name: 'Chanel No. 5',
    description: 'Parfum classique et élégant, notes florales et boisées',
    price: 150000,
    category: 'parfums',
    subcategory: 'femme',
    quality: 'haut',
    image: '',
    stock: 10
  },
  {
    name: 'Dior Sauvage',
    description: 'Parfum masculin frais et moderne',
    price: 120000,
    category: 'parfums',
    subcategory: 'homme',
    quality: 'haut',
    image: '',
    stock: 15
  },
  {
    name: 'Parfum Rose',
    description: 'Parfum abordable aux notes de rose',
    price: 25000,
    category: 'parfums',
    subcategory: 'femme',
    quality: 'moyen',
    image: '',
    stock: 20
  },
  // Abayas
  {
    name: 'Abaya Noire Classique',
    description: 'Abaya noire élégante pour femmes',
    price: 35000,
    category: 'abayas',
    subcategory: 'noire',
    quality: 'moyen',
    image: '',
    stock: 8
  },
  {
    name: 'Abaya Brodée',
    description: 'Abaya avec broderies délicates',
    price: 55000,
    category: 'abayas',
    subcategory: 'brodée',
    quality: 'haut',
    image: '',
    stock: 5
  },
  {
    name: 'Abaya Moderne',
    description: 'Abaya moderne et confortable',
    price: 40000,
    category: 'abayas',
    subcategory: 'moderne',
    quality: 'moyen',
    image: '',
    stock: 12
  },
  // Pâtisserie
  {
    name: 'Gâteau Anniversaire Chocolat',
    description: 'Délicieux gâteau au chocolat pour anniversaire',
    price: 15000,
    category: 'patisserie',
    subcategory: 'gâteaux',
    quality: 'moyen',
    image: '',
    stock: 10
  },
  {
    name: 'Croissants (x6)',
    description: 'Croissants frais et croustillants',
    price: 3000,
    category: 'patisserie',
    subcategory: 'viennoiseries',
    quality: 'moyen',
    image: '',
    stock: 30
  },
  {
    name: 'Yaourt Nature',
    description: 'Yaourt nature frais et crémeux',
    price: 500,
    category: 'patisserie',
    subcategory: 'yaourts',
    quality: 'moyen',
    image: '',
    stock: 50
  },
  {
    name: 'Gâteau Fruits',
    description: 'Gâteau aux fruits frais',
    price: 12000,
    category: 'patisserie',
    subcategory: 'gâteaux',
    quality: 'moyen',
    image: '',
    stock: 8
  },
  // Cuisine
  {
    name: 'Pizza Margherita',
    description: 'Pizza classique tomate, mozzarella, basilic',
    price: 8000,
    category: 'cuisine',
    subcategory: 'pizza',
    quality: 'moyen',
    image: '',
    stock: 20
  },
  {
    name: 'Shawarma Poulet',
    description: 'Shawarma au poulet avec sauce spéciale',
    price: 5000,
    category: 'cuisine',
    subcategory: 'shawarma',
    quality: 'moyen',
    image: '',
    stock: 25
  },
  {
    name: 'Pizza 4 Fromages',
    description: 'Pizza aux quatre fromages',
    price: 10000,
    category: 'cuisine',
    subcategory: 'pizza',
    quality: 'moyen',
    image: '',
    stock: 15
  },
  {
    name: 'Shawarma Viande',
    description: 'Shawarma à la viande avec légumes',
    price: 6000,
    category: 'cuisine',
    subcategory: 'shawarma',
    quality: 'moyen',
    image: '',
    stock: 20
  }
];

function seedDatabase() {
  const db = database.getDb();
  
  console.log('Début de l\'insertion des données de test...');
  
  const query = `
    INSERT INTO products (name, description, price, category, subcategory, quality, image, stock)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  let inserted = 0;
  
  sampleProducts.forEach(product => {
    db.run(query, [
      product.name,
      product.description,
      product.price,
      product.category,
      product.subcategory,
      product.quality,
      product.image,
      product.stock
    ], function(err) {
      if (err) {
        console.error(`Erreur insertion ${product.name}:`, err.message);
      } else {
        inserted++;
        console.log(`✓ ${product.name} inséré (ID: ${this.lastID})`);
        
        if (inserted === sampleProducts.length) {
          console.log(`\n✅ ${inserted} produits insérés avec succès!`);
          process.exit(0);
        }
      }
    });
  });
}

// Initialiser la base de données puis insérer les données
database.initDatabase();
setTimeout(() => {
  seedDatabase();
}, 2000);
