import { transformRemoveEmpty } from '@/zod';

// Test suite for transformRemoveEmpty
describe('transformRemoveEmpty', () => {
  // Test case: should remove undefined properties
  it('should remove undefined properties', () => {
    const input = { prop1: undefined, prop2: 'value' };
    const expectedOutput = { prop2: 'value' };
    const result = transformRemoveEmpty(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case: should remove null properties
  it('should remove null properties', () => {
    const input = { prop1: null, prop2: 'value' };
    const expectedOutput = { prop2: 'value' };
    const result = transformRemoveEmpty(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case: should remove empty string properties
  it('should remove empty string properties', () => {
    const input = { prop1: '', prop2: 'value' };
    const expectedOutput = { prop2: 'value' };
    const result = transformRemoveEmpty(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case: should keep non-empty string properties
  it('should keep non-empty string properties', () => {
    const input = { prop1: 'value', prop2: 'another value' };
    const expectedOutput = { prop1: 'value', prop2: 'another value' };
    const result = transformRemoveEmpty(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case: should keep boolean properties
  it('should keep boolean properties', () => {
    const input = { prop1: true, prop2: false };
    const expectedOutput = { prop1: true, prop2: false };
    const result = transformRemoveEmpty(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case: should keep number properties
  it('should keep number properties', () => {
    const input = { prop1: 0, prop2: 42 };
    const expectedOutput = { prop1: 0, prop2: 42 };
    const result = transformRemoveEmpty(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case: should handle mixed properties
  it('should handle mixed properties', () => {
    const input = {
      prop1: undefined,
      prop2: null,
      prop3: '',
      prop4: 'value',
      prop5: true,
      prop6: 42,
    };
    const expectedOutput = { prop4: 'value', prop5: true, prop6: 42 };
    const result = transformRemoveEmpty(input);
    expect(result).toEqual(expectedOutput);
  });
});
