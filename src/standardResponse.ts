import { Request, Response } from 'express';
import { getCurrentDateTime } from './helpers';
import { StandardResponse, StandardResponseInput } from './types';

/**
 * Returns a standardized JSON response for express requests.
 * @param {StandardResponseInput} dataInput - Input data for the response.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 */
export const standardResponse = (
  dataInput: StandardResponseInput,
  req: Request,
  res: Response,
): StandardResponse => {
  const { success, data, message } = dataInput;
  const dateTime = getCurrentDateTime();

  return {
    success,
    data,
    message: message ?? '',
    responseDateUTC: dateTime.formattedDateUTC,
    responseTimeUTC: dateTime.formattedTimeUTC,
    responseTimeInMs: res.getElapsedTimeInMs(),
  };
};
