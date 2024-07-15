import { SanitizeOptions } from './types';

/**
 * Sanitizes a given input string by removing potentially harmful content
 * based on the specified options.
 *
 * @param input - The input string to be sanitized.
 * @param options - The options to toggle each sanitization step on or off.
 * @returns The sanitized string.
 */
export const sanitize = (
  input: string,
  options: SanitizeOptions = {
    removeHTMLTags: true,
    removeSQLInjectionPatterns: true,
    removeJavaScriptCode: true,
    removeNoSQLInjectionPatterns: true,
  },
): string => {
  // Remove HTML tags
  const removeHTMLTags = (str: string): string => {
    return str.replace(/<[^>]*>/g, '');
  };

  // Remove SQL injection patterns
  const removeSQLInjectionPatterns = (str: string): string => {
    return str.replace(
      /(\b(SELECT|INSERT|DELETE|UPDATE|DROP|CREATE|ALTER|TRUNCATE|EXEC|UNION|ALL)\b)/gi,
      '',
    );
  };

  // Remove JavaScript code
  const removeJavaScriptCode = (str: string): string => {
    return str.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  };

  // Remove NoSQL injection patterns
  const removeNoSQLInjectionPatterns = (str: string): string => {
    return str.replace(/(\$\b(where|regex|ne|eq|gt|gte|lt|lte|in|nin|exists)\b)/gi, '');
  };

  // Apply sanitization steps based on options
  let sanitizedString = input;
  if (options.removeHTMLTags) {
    sanitizedString = removeHTMLTags(sanitizedString);
  }
  if (options.removeSQLInjectionPatterns) {
    sanitizedString = removeSQLInjectionPatterns(sanitizedString);
  }
  if (options.removeJavaScriptCode) {
    sanitizedString = removeJavaScriptCode(sanitizedString);
  }
  if (options.removeNoSQLInjectionPatterns) {
    sanitizedString = removeNoSQLInjectionPatterns(sanitizedString);
  }

  return sanitizedString;
};
