import express, { Express } from 'express';
import request from 'supertest';
import { configModule } from '@/modules';

// Test suite for configRouter
describe('configRouter', () => {
  let app: Express;
  const config = { key: 'value' };

  beforeAll(() => {
    app = express();
    configModule(app, config);
  });

  // Test case: Should return config as JSON
  it('should return config as JSON', async () => {
    const response = await request(app).get('/config');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(config);
  });
});
