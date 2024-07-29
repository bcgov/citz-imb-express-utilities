import express, { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import request from 'supertest';
import { numberParam } from '@/zod';
import { HTTP_STATUS_CODES } from '@/constants';
import { HttpError } from '@/classes';
import { getCurrentDateTime, elapsedTimeMiddlewareFunction } from '@/helpers';
import { StandardResponseInput } from '@/types';
import { expressUtilitiesMiddleware } from '@/middleware';

// Set up the Express app with middleware
const app = express();
app.use(express.json());
app.use(expressUtilitiesMiddleware);

app.get('/params/:id', (req: Request, res: Response) => {
  const paramsSchema = z.object({
    id: numberParam('id'),
  });

  let responseBody = {},
    statusCode = 200;
  try {
    responseBody = req.getZodValidatedParams(paramsSchema) as object;
  } catch (error) {
    responseBody = { message: (error as HttpError).message };
    statusCode = (error as HttpError).statusCode;
  }
  res.status(statusCode).json(responseBody);
});

app.get('/query', (req: Request, res: Response) => {
  const querySchema = z.object({
    search: numberParam('search'),
  });

  let responseBody = {},
    statusCode = 200;
  try {
    responseBody = req.getZodValidatedQuery(querySchema) as object;
  } catch (error) {
    responseBody = { message: (error as HttpError).message };
    statusCode = (error as HttpError).statusCode;
  }
  res.status(statusCode).json(responseBody);
});

app.post('/body', (req: Request, res: Response) => {
  const bodySchema = z.object({
    username: z.string(),
  });

  let responseBody = {},
    statusCode = 200;
  try {
    responseBody = req.getZodValidatedBody(bodySchema) as object;
  } catch (error) {
    responseBody = { message: (error as HttpError).message };
    statusCode = (error as HttpError).statusCode;
  }
  res.status(statusCode).json(responseBody);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  elapsedTimeMiddlewareFunction(req);
  next();
});

app.get('/elapsed-time', (req: Request, res: Response) => {
  res.json({ elapsedTime: req.getElapsedTimeInMs() });
});

type MockResponseData = {
  key: string;
};

app.get('/standard-response', (req: Request, res: Response) => {
  const input: StandardResponseInput<MockResponseData> = { success: true, data: { key: 'value' } };
  const response = req.getStandardResponse(input);
  res.status(200).json(response);
});

// Integration tests using supertest
describe('zodValidationMiddleware Integration Tests', () => {
  // Test case: Valid path params
  it('should validate request path params using Zod schema', async () => {
    const response = await request(app).get('/params/123');
    expect(response.status).toBe(HTTP_STATUS_CODES.OK);
    expect(response.body).toEqual({ id: 123 });
  });

  // Test case: Invalid path params
  it('should return 400 for invalid path params', async () => {
    const response = await request(app).get('/params/invalid');
    expect(response.status).toBe(HTTP_STATUS_CODES.BAD_REQUEST);
    expect(response.body).toEqual({
      message:
        'Request is malformed. Invalid path parameters: id: (Message: `id` must be a number.)',
    });
  });

  // Test case: Valid query params
  it('should validate request query using Zod schema', async () => {
    const response = await request(app).get('/query?search=1');
    expect(response.status).toBe(HTTP_STATUS_CODES.OK);
    expect(response.body).toEqual({ search: 1 });
  });

  // Test case: Invalid query params
  it('should return 400 for invalid query params', async () => {
    const response = await request(app).get('/query?search=ten');
    expect(response.status).toBe(HTTP_STATUS_CODES.BAD_REQUEST);
    expect(response.body).toEqual({
      message:
        'Request is malformed. Invalid query parameters: search: (Message: `search` must be a number.)',
    });
  });

  // Test case: Valid request body
  it('should validate request body using Zod schema', async () => {
    const response = await request(app).post('/body').send({ username: 'john_doe' });
    expect(response.status).toBe(HTTP_STATUS_CODES.OK);
    expect(response.body).toEqual({ username: 'john_doe' });
  });

  // Test case: Invalid request body
  it('should return 400 for invalid request body', async () => {
    const response = await request(app).post('/body').send({ username: 2 });
    expect(response.status).toBe(HTTP_STATUS_CODES.BAD_REQUEST);
    expect(response.body).toEqual({
      message:
        'Request is malformed. Invalid request body: username: (Expected: string, Received: number, Message: Expected string, received number)',
    });
  });

  // Test case: Elapsed time middleware
  it('should return the elapsed time in milliseconds', async () => {
    const response = await request(app).get('/elapsed-time');
    expect(response.status).toBe(HTTP_STATUS_CODES.OK);
    expect(Number(response.body.elapsedTime)).toBeGreaterThan(0);
  });

  // Test case: Standard response middleware
  it('should return a standardized response', async () => {
    const response = await request(app).get('/standard-response');
    expect(response.status).toBe(HTTP_STATUS_CODES.OK);
    const currentDateTime = getCurrentDateTime();
    expect(response.body).toEqual({
      success: true,
      data: { key: 'value' },
      message: '',
      responseDateUTC: currentDateTime.formattedDateUTC,
      responseTimeUTC: currentDateTime.formattedTimeUTC,
      responseTimeInMs: expect.any(String),
    });
  });
});
