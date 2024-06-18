import { refineAtLeastOneNonEmpty } from '@/zod';

// Test suite for refineAtLeastOneNonEmpty
describe('refineAtLeastOneNonEmpty', () => {
  // Test case: should return true if at least one non-empty string property is defined
  it('should return true if at least one non-empty string property is defined', () => {
    const keys = ['prop1', 'prop2'];
    const data = { prop1: '', prop2: 'non-empty' };
    const result = refineAtLeastOneNonEmpty(keys)(data);
    expect(result).toBe(true);
  });

  // Test case: should return false if all string properties are empty
  it('should return false if all string properties are empty', () => {
    const keys = ['prop1', 'prop2'];
    const data = { prop1: '', prop2: '   ' };
    const result = refineAtLeastOneNonEmpty(keys)(data);
    expect(result).toBe(false);
  });

  // Test case: should return true if a boolean property is defined
  it('should return true if a boolean property is defined', () => {
    const keys = ['prop1', 'prop2'];
    const data = { prop1: '', prop2: true };
    const result = refineAtLeastOneNonEmpty(keys)(data);
    expect(result).toBe(true);
  });

  // Test case: should return true if a number property is defined
  it('should return true if a number property is defined', () => {
    const keys = ['prop1', 'prop2'];
    const data = { prop1: '', prop2: 42 };
    const result = refineAtLeastOneNonEmpty(keys)(data);
    expect(result).toBe(true);
  });

  // Test case: should return false if all specified properties are undefined or null
  it('should return false if all specified properties are undefined or null', () => {
    const keys = ['prop1', 'prop2'];
    const data = { prop1: undefined, prop2: null };
    const result = refineAtLeastOneNonEmpty(keys)(data);
    expect(result).toBe(false);
  });

  // Test case: should return true if multiple valid properties are defined
  it('should return true if multiple valid properties are defined', () => {
    const keys = ['prop1', 'prop2', 'prop3'];
    const data = { prop1: 'valid', prop2: 123, prop3: true };
    const result = refineAtLeastOneNonEmpty(keys)(data);
    expect(result).toBe(true);
  });

  // Test case: should return false if no properties are passed
  it('should return false if no properties are passed', () => {
    const keys: string[] = [];
    const data = { prop1: 'value', prop2: 123 };
    const result = refineAtLeastOneNonEmpty(keys)(data);
    expect(result).toBe(false);
  });
});
