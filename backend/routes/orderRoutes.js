const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// POST /api/orders - Créer une nouvelle commande
router.post('/', orderController.createOrder);

// GET /api/orders - Récupérer toutes les commandes
router.get('/', orderController.getAllOrders);

// GET /api/orders/:id - Récupérer une commande par ID avec ses articles
router.get('/:id', orderController.getOrderById);

// PUT /api/orders/:id/status - Mettre à jour le statut d'une commande
router.put('/:id/status', orderController.updateOrderStatus);

module.exports = router;
