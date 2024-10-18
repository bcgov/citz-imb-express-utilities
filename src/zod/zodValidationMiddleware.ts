import type { Request } from 'express';
import { validateZodRequestSchema } from './validateZodRequestSchema';
import type { ZodSchema } from 'zod';
import type { ZodValidationOptions } from '../types';

/**
 * Express middleware functions that add zod validation functions onto the request object.
 * Used as part of the Express Utilities middleware.
 */
export const zodValidationMiddlewareFunctions = (req: Request) => {
  // Params.
  req.getZodValidatedParams = (
    schema: ZodSchema<unknown>,
    options?: ZodValidationOptions,
  ): unknown =>
    validateZodRequestSchema(
      req.params,
      schema,
      'Request is malformed. Invalid path parameters: ',
      options,
    );

  // Query.
  req.getZodValidatedQuery = (
    schema: ZodSchema<unknown>,
    options?: ZodValidationOptions,
  ): unknown =>
    validateZodRequestSchema(
      req.query,
      schema,
      'Request is malformed. Invalid query parameters: ',
      options,
    );

  // Request body.
  req.getZodValidatedBody = (schema: ZodSchema<unknown>, options?: ZodValidationOptions): unknown =>
    validateZodRequestSchema(
      req.body,
      schema,
      'Request is malformed. Invalid request body: ',
      options,
    );
};
