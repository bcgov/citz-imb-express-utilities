/**
 * Use in the refine method of a Zod schema.
 * Require at least one property to be defined and non-empty (not empty string, undefined, or null).
 * @param {string[]} keys - The keys of the properties to check.
 * @returns {Function} A function that checks if at least one of the specified properties is non-empty.
 */
export const refineAtLeastOneNonEmpty = (keys: string[]) => {
  return (data: Record<string, unknown>) => {
    const nonEmptyValues = keys.filter((key) => {
      const value = data[key];

      // strings must be non-empty
      if (typeof value === 'string') return value.trim() !== '';
      // boolean and number value are always considered non-empty
      if (typeof value === 'boolean' || typeof value === 'number') return true;

      return false;
    });
    // Check that at least one value is non-empty.
    return nonEmptyValues.length > 0;
  };
};
