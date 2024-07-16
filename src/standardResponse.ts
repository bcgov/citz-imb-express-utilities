import { Request } from 'express';
import { getCurrentDateTime } from './helpers';
import { StandardResponse, StandardResponseInput } from './types';

/**
 * Returns a standardized JSON response for express requests.
 * @param {StandardResponseInput} dataInput - Input data for the response.
 * @param {Request} req - Express request object.
 */
export const standardResponse = (
  dataInput: StandardResponseInput,
  req: Request,
): StandardResponse => {
  const { success = true, data, message } = dataInput;
  const dateTime = getCurrentDateTime();

  return {
    success,
    data,
    message: message ?? '',
    responseDateUTC: dateTime.formattedDateUTC,
    responseTimeUTC: dateTime.formattedTimeUTC,
    responseTimeInMs: req.getElapsedTimeInMs(),
  };
};
