import { Request, Response, NextFunction } from 'express';
import { HttpError } from './classes';
import { DEFAULT_LOG_FUNCTION, HTTP_STATUS_CODES } from './constants';
import { ErrorWrapperOptions, ExpressRouteHandler, HttpStatusCode } from './types';

/**
 * Wraps a route handler (controller) function with error handling logic.
 * @param {ExpressRouteHandler} handler - The route handler (controller) function to wrap.
 * @param {ErrorWrapperOptions} options - Configuration options.
 * @returns {Promise<void | Response<unknown> | undefined>} A new middleware function that wraps the route handler in a try-catch block.
 */
export const errorWrapper = (handler: ExpressRouteHandler, options: ErrorWrapperOptions = {}) => {
  const { logFunction = DEFAULT_LOG_FUNCTION } = options;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Execute the request logic.
      await handler(req, res, next);
    } catch (error: unknown) {
      const { method, originalUrl, getStandardResponse } = req;

      let statusCode: HttpStatusCode | number = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        message = 'An unexpected error occurred';

      if (error instanceof HttpError) {
        statusCode = error.statusCode;
        message = error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      // Log the error to the console (default) or custom log function.
      logFunction({ method, originalUrl, statusCode, message });

      // Create the response data object (default) or use custom response object.
      const responseData = getStandardResponse({
        success: false,
        data: { method, originalUrl, statusCode },
        message,
      });

      // Send response back to the client.
      res.status(statusCode).json(responseData);
    }
  };
};
