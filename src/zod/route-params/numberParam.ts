import { z } from 'zod';

/**
 * Validates a number query parameter with transformation (accepts any numeric value)
 * @param {string} param - The string to validate.
 * @param {boolean} [optional] - If the param is optional.
 * @returns {z.ZodEffects<z.ZodString, number | undefined>} The Zod schema for a number query parameter.
 * @example
 * // Define a Zod schema for the query parameters
 * const querySchema = z.object({
 *   sum: numberParam('sum'),
 * });
 *
 * // The following should be inside a route handler (controller) function:
 *
 * // Validate the query parameters
 * const result = querySchema.safeParse(req.query);
 *
 * if (!result.success) {
 *   // If validation fails, send a 400 response with the validation errors
 *   return res.status(400).json({ errors: result.error.errors });
 * }
 *
 * // Access the transformed boolean value
 * const { sum } = result.data;
 */
export const numberParam = (param: string, optional = false) =>
  optional
    ? z
        .string()
        .optional()
        .refine(
          (value) => value === undefined || (value !== '' && !Number.isNaN(Number.parseFloat(value))),
          {
            message: `\`${param}\` must be a number.`,
          },
        )
        .transform((value) => (value === undefined ? undefined : Number.parseFloat(value)))
    : z
        .string()
        .refine((value) => value !== '' && !Number.isNaN(Number.parseFloat(value)), {
          message: `\`${param}\` must be a number.`,
        })
        .transform((value) => Number.parseFloat(value));
