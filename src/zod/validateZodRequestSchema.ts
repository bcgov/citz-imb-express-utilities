import { ZodError, ZodSchema, ZodIssueCode } from 'zod';
import { HttpError } from '../classes';
import { HTTP_STATUS_CODES } from '../constants';
import { ZodValidationErrorDetail, ZodValidationOptions } from '../types';
import { sanitize } from '../sanitize';

/**
 * Validates an object against a Zod schema and throws an 400 HttpError if validation fails.
 * @param {Record<string, unknown>} obj - The object to be validated.
 * @param {z.ZodSchema<unknown>} schema - The Zod schema to validate against.
 * @param {string} errorMsgPrefix - A prefix to be added to the error message.
 * @returns {unknown} - The validated and parsed object.
 * @throws {HttpError} - Throws an HttpError with detailed validation error messages if validation fails.
 */
export const validateZodRequestSchema = (
  obj: Record<string, unknown>,
  schema: ZodSchema<unknown>,
  errorMsgPrefix: string,
  options?: ZodValidationOptions,
): unknown => {
  try {
    // Use Zod schema to parse and validate the query parameters
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sanitizedSchema = schema.transform((data: any) => {
      const sanitizedData: Record<string, unknown> = {};

      Object.keys(data).forEach((key) => {
        if (typeof data[key] === 'string') {
          sanitizedData[key] = sanitize(data[key], options?.sanitizationOptions);
        } else {
          sanitizedData[key] = data[key];
        }
      });

      return sanitizedData;
    });

    return sanitizedSchema.parse(obj);
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
            return `${detail.path.join('.')}: (Expected: ${detail.expected}, Received: ${detail.received}, Message: ${detail.message})`;
          }

          return `${detail.path.join('.')}: (Message: ${detail.message})`;
        })
        .join(', ');

      // If validation fails, throw an error with detailed information
      throw new HttpError(HTTP_STATUS_CODES.BAD_REQUEST, `${errorMsgPrefix}${formattedErrors}`);
    }
    // For unexpected errors, rethrow them
    throw error;
  }
};
