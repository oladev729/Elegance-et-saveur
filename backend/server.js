require('dotenv').config();
const express = require('express');
const cors = require('cors');
const database = require('./database');

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialisation de la base de données
database.initDatabase();

// Routes API
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API Elegance et Saveur' });
});

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);

// Route WhatsApp - Redirection vers WhatsApp pour commander
app.get('/whatsapp', (req, res) => {
  const { phone, message } = req.query;
  const whatsappNumber = process.env.WHATSAPP_NUMBER || phone;
  
  if (!whatsappNumber) {
    return res.status(400).json({ error: 'Numéro WhatsApp non configuré' });
  }
  
  const encodedMessage = message ? encodeURIComponent(message) : encodeURIComponent('Bonjour, je souhaite passer une commande.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  res.json({ whatsappUrl });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
