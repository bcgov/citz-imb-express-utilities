import { Request, Response, NextFunction } from 'express';
import { HttpError } from './classes';
import { HTTP_STATUS_CODES } from './constants';
import { ExpressHandler } from './types';

/**
 * Wraps a route handler (controller) function with error handling logic.
 * @param {ExpressHandler} handler - The route handler (controller) function to wrap.
 * @returns {Promise<void | Response<unknown> | undefined>} A new middleware function that wraps the route handler in a try-catch block.
 */
export const errorWrapper = (handler: ExpressHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Execute the request logic.
      await handler(req, res, next);
    } catch (error: unknown) {
      const { method, originalUrl } = req;
      let statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        message;

      if (error instanceof HttpError) {
        statusCode = error.statusCode;
        message = error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      // Log the error to the console.
      console.error(`REQUEST ERROR: [${method}] ${originalUrl}: ${message}`);

      // Send response back to the client.
      res.status(statusCode).json({
        method,
        originalUrl,
        message,
      });
    }
  };
};
