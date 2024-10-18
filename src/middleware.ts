import type { Request, Response, NextFunction } from 'express';
import { zodValidationMiddlewareFunctions } from './zod';
import { elapsedTimeMiddlewareFunction } from './helpers';
import type { StandardResponseInput } from './types';
import { standardResponse } from './standardResponse';

/**
 * Express middleware
 * Place this middleware before your routes are defined to give them access to custom functions.
 */
export const expressUtilitiesMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Add elapsedTime function to response object.
  elapsedTimeMiddlewareFunction(req);

  // Add Zod validation function to request object.
  zodValidationMiddlewareFunctions(req);

  // Add standard response function.
  req.getStandardResponse = <TData>(inputData: StandardResponseInput<TData>) =>
    standardResponse<TData>(inputData, req);

  next();
};
