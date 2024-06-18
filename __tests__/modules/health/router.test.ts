import express, { Express } from 'express';
import request from 'supertest';
import { healthModule } from '@/modules';

// Test suite for healthRouter
describe('healthRouter', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    healthModule(app);
  });

  // Test case: Should return 200 status
  it('should return 200 status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
  });
});
