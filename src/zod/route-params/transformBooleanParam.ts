import { z } from 'zod';

/**
 * Validates a boolean query parameter with transformation
 * @param {string} param - The string to validate.
 * @param {boolean} [optional] - If the param is optional.
 * @returns {z.ZodEffects<z.ZodString, boolean | undefined>} The Zod schema for a boolean query parameter.
 * @example
 * // Define a Zod schema for the query parameters
 * const querySchema = z.object({
 *   isActive: transformBooleanParam('isActive'),
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
 * // Access the transformed boolean value
 * const { isActive } = result.data;
 */
export const transformBooleanParam = (param: string, optional = false) =>
  optional
    ? z
        .string()
        .optional()
        .refine((value) => value === undefined || value === 'true' || value === 'false', {
          message: `\`${param}\` must be a boolean ('true' or 'false') or undefined.`,
        })
        .transform((value) => (value === undefined ? undefined : value === 'true'))
    : z
        .string()
        .refine((value) => value === 'true' || value === 'false', {
          message: `\`${param}\` must be a boolean ('true' or 'false').`,
        })
        .transform((value) => value === 'true');
