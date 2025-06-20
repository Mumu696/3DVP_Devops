const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// Route pour obtenir les services
router.get('/services', controllers.getServices);

// Route pour le statut de l'application
router.get('/status', controllers.getStatus);

module.exports = router;