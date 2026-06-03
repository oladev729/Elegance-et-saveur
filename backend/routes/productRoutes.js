const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET /api/products - Récupérer tous les produits (optionnellement filtrés par catégorie)
router.get('/', productController.getAllProducts);

// GET /api/products/:id - Récupérer un produit par ID
router.get('/:id', productController.getProductById);

// POST /api/products - Créer un nouveau produit
router.post('/', productController.createProduct);

// PUT /api/products/:id - Mettre à jour un produit
router.put('/:id', productController.updateProduct);

// DELETE /api/products/:id - Supprimer un produit
router.delete('/:id', productController.deleteProduct);

module.exports = router;
