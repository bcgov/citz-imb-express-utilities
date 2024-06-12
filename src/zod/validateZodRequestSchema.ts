import { ZodError, z, ZodIssueCode } from 'zod';
import { HttpError } from '../classes';
import { HTTP_STATUS_CODES } from '../constants';
import { ZodValidationErrorDetail } from '../types';

/**
 * Validates an object against a Zod schema and throws an 400 HttpError if validation fails.
 * @param {Record<string, unknown>} obj - The object to be validated.
 * @param {z.ZodSchema<T>} schema - The Zod schema to validate against.
 * @param {string} errorMsgPrefix - A prefix to be added to the error message.
 * @returns {T} - The validated and parsed object.
 * @throws {HttpError} - Throws an HttpError with detailed validation error messages if validation fails.
 */
export const validateZodRequestSchema = <T>(
  obj: Record<string, unknown>,
  schema: z.ZodSchema<T>,
  errorMsgPrefix: string,
): T => {
  try {
    // Use Zod schema to parse and validate the query parameters
    return schema.parse(obj);
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.errors
        .map((e) => {
          const detail: ZodValidationErrorDetail = {
            path: e.path,
            message: e.message,
            expected: '',
            received: '',
          };

          if (e.code === ZodIssueCode.invalid_type) {
            detail.expected = e.expected;
            detail.received = e.received;
          }

          return `${detail.path.join('.')}: (Expected: ${detail.expected}, Received: ${detail.received}, Message: ${detail.message})`;
        })
        .join(', ');

      // If validation fails, throw an error with detailed information
      throw new HttpError(HTTP_STATUS_CODES.BAD_REQUEST, `${errorMsgPrefix}${formattedErrors}`);
    }
    // For unexpected errors, rethrow them
    throw error;
  }
};
