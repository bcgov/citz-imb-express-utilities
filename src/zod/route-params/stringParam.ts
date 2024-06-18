import { z } from 'zod';

/**
 * Validates a non-empty string
 * @param {string} param - The string to validate.
 * @param {boolean} [optional] - If the param is optional.
 * @returns {z.ZodString | z.ZodOptional<z.ZodString>} The Zod schema for a non-empty string.
 * @example
 * // Define a Zod schema for the query parameters
 * const querySchema = z.object({
 *   name: stringParam('name'),
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
 */
export const stringParam = (param: string, optional = false) =>
  optional
    ? z
        .string()
        .min(1, { message: `\`${param}\` must be a non-empty string.` })
        .optional()
    : z.string().min(1, { message: `\`${param}\` must be a non-empty string.` });
