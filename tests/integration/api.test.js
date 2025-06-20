const request = require('supertest');
const { app, server } = require('../../src/app');

describe('API Integration Tests', () => {
  afterAll((done) => {
    server.close(done); // Ferme le serveur après les tests
  });

  it('GET /api/services should return 200 and services list', async () => {
    const response = await request(app).get('/api/services');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('GET /api/status should return 200 and app status', async () => {
    const response = await request(app).get('/api/status');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('timestamp');
  });
});