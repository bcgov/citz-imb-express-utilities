import { Request, Response, NextFunction } from 'express';
import { zodValidationMiddlewareFunctions } from './zod';
import { elapsedTimeMiddlewareFunction } from './helpers';
import { StandardResponseInput } from './types';
import { standardResponse } from './standardResponse';

/**
 * Express middleware
 * Place this middleware before your routes are defined to give them access to custom functions.
 */
export const expressUtilitiesMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Add elapsedTime function to response object.
  elapsedTimeMiddlewareFunction(res);

  // Add Zod validation function to request object.
  zodValidationMiddlewareFunctions(req);

  // Add standard response function.
  res.getStandardResponse = (inputData: StandardResponseInput) =>
    standardResponse(inputData, req, res);

  next();
};
