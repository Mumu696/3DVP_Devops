document.addEventListener('DOMContentLoaded', () => {
  // Charger les services
  fetch('/api/services')
    .then(response => response.json())
    .then(services => {
      const servicesList = document.getElementById('services-list');
      
      services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
          <div class="service-icon">${service.icon}</div>
          <h3>${service.name}</h3>
          <p>${service.description}</p>
        `;
        servicesList.appendChild(serviceCard);
      });
    });

  // Charger le statut
  fetch('/api/status')
    .then(response => response.json())
    .then(status => {
      const statusInfo = document.getElementById('status-info');
      const date = new Date(status.timestamp);
      
      statusInfo.innerHTML = `
        <p><strong>Statut:</strong> <span class="status-ok">${status.status}</span></p>
        <p><strong>Dernière mise à jour:</strong> ${date.toLocaleString()}</p>
      `;
    });
});