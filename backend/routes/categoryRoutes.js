const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// GET /api/categories - Récupérer toutes les catégories
router.get('/', categoryController.getAllCategories);

// GET /api/categories/:id - Récupérer une catégorie par ID
router.get('/:id', categoryController.getCategoryById);

// POST /api/categories - Créer une nouvelle catégorie
router.post('/', categoryController.createCategory);

module.exports = router;
