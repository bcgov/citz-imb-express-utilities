import type { Request } from 'express';
import { getCurrentDateTime } from './helpers';
import type { StandardResponse, StandardResponseInput } from './types';

/**
 * Returns a standardized JSON response for express requests.
 * @param {StandardResponseInput} dataInput - Input data for the response.
 * @param {Request} req - Express request object.
 */
export const standardResponse = <TData>(
  dataInput: StandardResponseInput<TData>,
  req: Request,
): StandardResponse<TData> => {
  const { success = true, data, message } = dataInput;
  const dateTime = getCurrentDateTime();

  const response: StandardResponse<TData> = {
    success,
    message: message ?? '',
    responseDateUTC: dateTime.formattedDateUTC,
    responseTimeUTC: dateTime.formattedTimeUTC,
    responseTimeInMs: req.getElapsedTimeInMs(),
  };

  if (data) response.data = data;

  return response;
};
