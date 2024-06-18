import { z } from 'zod';
import { transformIntegerParam } from '@/zod';

// Test suite for transformIntegerParam
describe('transformIntegerParam', () => {
  // Test case: should validate and transform a required integer string
  it('should validate and transform a required integer string', () => {
    const schema = z.object({
      count: transformIntegerParam('count'),
    });

    const result = schema.safeParse({ count: '42' });
    expect(result.success).toBe(true);
    expect(result.data?.count).toBe(42);
  });

  // Test case: should invalidate a non-integer string for a required field
  it('should invalidate a non-integer string for a required field', () => {
    const schema = z.object({
      count: transformIntegerParam('count'),
    });

    const result = schema.safeParse({ count: '42.5' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('`count` must be an integer.');
  });

  // Test case: should invalidate a non-numeric string for a required field
  it('should invalidate a non-numeric string for a required field', () => {
    const schema = z.object({
      count: transformIntegerParam('count'),
    });

    const result = schema.safeParse({ count: 'abc' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('`count` must be an integer.');
  });

  // Test case: should validate and transform an optional integer string
  it('should validate and transform an optional integer string', () => {
    const schema = z.object({
      count: transformIntegerParam('count', true),
    });

    const result = schema.safeParse({ count: '42' });
    expect(result.success).toBe(true);
    expect(result.data?.count).toBe(42);
  });

  // Test case: should validate if the optional integer is not provided
  it('should validate if the optional integer is not provided', () => {
    const schema = z.object({
      count: transformIntegerParam('count', true),
    });

    const result = schema.safeParse({});
    expect(result.success).toBe(true);
    expect(result.data?.count).toBeUndefined();
  });

  // Test case: should invalidate a non-integer string for an optional field
  it('should invalidate a non-integer string for an optional field', () => {
    const schema = z.object({
      count: transformIntegerParam('count', true),
    });

    const result = schema.safeParse({ count: '42.5' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('`count` must be an integer or undefined.');
  });

  // Test case: should invalidate a non-numeric string for an optional field
  it('should invalidate a non-numeric string for an optional field', () => {
    const schema = z.object({
      count: transformIntegerParam('count', true),
    });

    const result = schema.safeParse({ count: 'abc' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('`count` must be an integer or undefined.');
  });
});
