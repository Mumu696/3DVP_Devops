const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes'));

// Exportez uniquement l'app sans démarrer le serveur
module.exports = app;

// Démarrage du serveur seulement si exécuté directement
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const server = app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
  
  // Gestion propre de la fermeture
  process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Serveur fermé');
    });
  });
}
