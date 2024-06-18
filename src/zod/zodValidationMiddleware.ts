import { Request, Response, NextFunction } from 'express';
import { validateZodRequestSchema } from './validateZodRequestSchema';
import { ZodSchema } from 'zod';

/**
 * Express middleware that adds zod validation functions onto the request object.
 * Place this middleware before your routes are defined to give them access to these functions.
 */
export const zodValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Params.
  req.getZodValidatedParams = (schema: ZodSchema<unknown>): unknown =>
    validateZodRequestSchema(req.params, schema, 'Request is malformed. Invalid path parameters: ');

  // Query.
  req.getZodValidatedQuery = (schema: ZodSchema<unknown>): unknown =>
    validateZodRequestSchema(req.query, schema, 'Request is malformed. Invalid query parameters: ');

  // Request body.
  req.getZodValidatedBody = (schema: ZodSchema<unknown>): unknown =>
    validateZodRequestSchema(req.body, schema, 'Request is malformed. Invalid request body: ');

  next();
};
