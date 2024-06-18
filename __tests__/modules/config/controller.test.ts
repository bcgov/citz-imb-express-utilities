import { getConfig } from '@/modules/config/controller';
import { Request, Response, NextFunction } from 'express';

// Mock the errorWrapper
jest.mock('@/errorWrapper', () => ({
  errorWrapper: (fn: unknown) => fn,
}));

// Test suite for getConfig function
describe('getConfig', () => {
  // Test case: Should return config as JSON
  it('should return config as JSON', async () => {
    const config = { key: 'value' };
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;
    const next: NextFunction = jest.fn();

    const handler = getConfig(config);
    await handler(req, res, next);

    expect(res.json).toHaveBeenCalledWith(config);
  });
});
