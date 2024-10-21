import type { Request } from 'express';

/**
 * Express middleware function that adds a function to the request object that returns the elapsed time.
 * Used as part of the Express Utilities middleware.
 */
export const elapsedTimeMiddlewareFunction = (req: Request) => {
  const startHrTime = process.hrtime();

  req.getElapsedTimeInMs = () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    return elapsedTimeInMs.toFixed(3);
  };
};
