import { z } from 'zod';

/**
 * Validates an integer query parameter with transformation (accepts only whole numbers)
 * @param {string} param - The string to validate.
 * @param {boolean} [optional] - If the param is optional.
 * @returns {z.ZodEffects<z.ZodString, number | undefined>} The Zod schema for an integer query parameter.
 * @example
 * // Define a Zod schema for the query parameters
 * const querySchema = z.object({
 *   count: transformIntegerParam('count'),
 * });
 *
 * // Validate the query parameters
 * const result = querySchema.safeParse(req.query);
 *
 * if (!result.success) {
 *   // If validation fails, send a 400 response with the validation errors
 *   return res.status(400).json({ errors: result.error.errors });
 * }
 *
 * // Access the transformed integer value
 * const { count } = result.data;
 */
export const transformIntegerParam = (param: string, optional = false) =>
  optional
    ? z
        .string()
        .optional()
        .refine(
          (value) =>
            value === undefined ||
            (!Number.isNaN(parseInt(value, 10)) && Number.isInteger(parseFloat(value))),
          {
            message: `\`${param}\` must be an integer or undefined.`,
          },
        )
        .transform((value) => (value === undefined ? undefined : parseInt(value, 10)))
    : z
        .string()
        .refine(
          (value) => !Number.isNaN(parseInt(value, 10)) && Number.isInteger(parseFloat(value)),
          {
            message: `\`${param}\` must be an integer.`,
          },
        )
        .transform((value) => parseInt(value, 10));
