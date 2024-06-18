import { z } from 'zod';
import { numberParam } from '@/zod';

// Test suite for numberParam
describe('numberParam', () => {
  // Test case: should validate and transform a required number string
  it('should validate and transform a required number string', () => {
    const schema = z.object({
      sum: numberParam('sum'),
    });

    const result = schema.safeParse({ sum: '42.5' });
    expect(result.success).toBe(true);
    expect(result.data?.sum).toBe(42.5);
  });

  // Test case: should invalidate a non-numeric string for a required field
  it('should invalidate a non-numeric string for a required field', () => {
    const schema = z.object({
      sum: numberParam('sum'),
    });

    const result = schema.safeParse({ sum: 'abc' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('`sum` must be a number.');
  });

  // Test case: should invalidate an empty string for a required field
  it('should invalidate an empty string for a required field', () => {
    const schema = z.object({
      sum: numberParam('sum'),
    });

    const result = schema.safeParse({ sum: '' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('`sum` must be a number.');
  });

  // Test case: should validate and transform an optional number string
  it('should validate and transform an optional number string', () => {
    const schema = z.object({
      sum: numberParam('sum', true),
    });

    const result = schema.safeParse({ sum: '42.5' });
    expect(result.success).toBe(true);
    expect(result.data?.sum).toBe(42.5);
  });

  // Test case: should validate if the optional number is not provided
  it('should validate if the optional number is not provided', () => {
    const schema = z.object({
      sum: numberParam('sum', true),
    });

    const result = schema.safeParse({});
    expect(result.success).toBe(true);
    expect(result.data?.sum).toBeUndefined();
  });

  // Test case: should invalidate a non-numeric string for an optional field
  it('should invalidate a non-numeric string for an optional field', () => {
    const schema = z.object({
      sum: numberParam('sum', true),
    });

    const result = schema.safeParse({ sum: 'abc' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('`sum` must be a number.');
  });

  // Test case: should invalidate an empty string for an optional field
  it('should invalidate an empty string for an optional field', () => {
    const schema = z.object({
      sum: numberParam('sum', true),
    });

    const result = schema.safeParse({ sum: '' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('`sum` must be a number.');
  });
});
