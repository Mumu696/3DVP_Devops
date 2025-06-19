const services = [
  {
    id: 1,
    name: "Hébergement Cloud",
    description: "Solutions d'hébergement sécurisées dans le cloud",
    icon: "☁️"
  },
  {
    id: 2,
    name: "DevOps",
    description: "Automatisation et optimisation de votre infrastructure",
    icon: "🛠️"
  },
  {
    id: 3, 
    name: "Sécurité",
    description: "Protection de vos données et applications",
    icon: "🔒"
  }
];

exports.getServices = (req, res) => {
  res.json(services);
};

exports.getStatus = (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString()
  });
};