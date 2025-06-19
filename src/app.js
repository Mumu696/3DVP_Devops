const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes'));

// Exportez l'application sans démarrer le serveur
const server = app.listen(0); // 0 = port aléatoire pour les tests

// Exportez à la fois l'app et le server
module.exports = { app, server };

// Démarrage du serveur seulement si exécuté directement
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}