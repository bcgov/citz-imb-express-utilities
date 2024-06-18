/**
 * Use in the transform method of a Zod schema.
 * Removes undefined, null, or empty string properties of an object.
 * @param {T} obj - The object to transform.
 * @returns {Partial<T>} The transformed object with removed properties.
 */
export const transformRemoveEmpty = <T extends Record<string, unknown>>(obj: T): Partial<T> => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      !(typeof value === 'string' && value.trim() === '')
    ) {
      (acc as Record<string, unknown>)[key] = value;
    }
    return acc;
  }, {} as Partial<T>);
};
