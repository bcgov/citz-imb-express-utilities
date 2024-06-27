import { Request } from 'express';
import { validateZodRequestSchema } from './validateZodRequestSchema';
import { ZodSchema } from 'zod';

/**
 * Express middleware functions that add zod validation functions onto the request object.
 * Used as part of the Express Utilities middleware.
 */
export const zodValidationMiddlewareFunctions = (req: Request) => {
  // Params.
  req.getZodValidatedParams = <TSchema>(schema: ZodSchema<TSchema>): TSchema =>
    validateZodRequestSchema(req.params, schema, 'Request is malformed. Invalid path parameters: ');

  // Query.
  req.getZodValidatedQuery = <TSchema>(schema: ZodSchema<TSchema>): TSchema =>
    validateZodRequestSchema(req.query, schema, 'Request is malformed. Invalid query parameters: ');

  // Request body.
  req.getZodValidatedBody = <TSchema>(schema: ZodSchema<TSchema>): TSchema =>
    validateZodRequestSchema(req.body, schema, 'Request is malformed. Invalid request body: ');
};
