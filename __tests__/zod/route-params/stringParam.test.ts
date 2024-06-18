import { z } from 'zod';
import { stringParam } from '@/zod';

// Test suite for stringParam
describe('stringParam', () => {
  // Test case: should validate a required non-empty string
  it('should validate a required non-empty string', () => {
    const schema = z.object({
      name: stringParam('name'),
    });

    const result = schema.safeParse({ name: 'valid' });
    expect(result.success).toBe(true);
  });

  // Test case: should invalidate an empty string for a required field
  it('should invalidate an empty string for a required field', () => {
    const schema = z.object({
      name: stringParam('name'),
    });

    const result = schema.safeParse({ name: '' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('`name` must be a non-empty string.');
  });

  // Test case: should validate an optional non-empty string
  it('should validate an optional non-empty string', () => {
    const schema = z.object({
      name: stringParam('name', true),
    });

    const result = schema.safeParse({ name: 'valid' });
    expect(result.success).toBe(true);
  });

  // Test case: should validate if the optional string is not provided
  it('should validate if the optional string is not provided', () => {
    const schema = z.object({
      name: stringParam('name', true),
    });

    const result = schema.safeParse({});
    expect(result.success).toBe(true);
  });

  // Test case: should invalidate an empty string for an optional field
  it('should invalidate an empty string for an optional field', () => {
    const schema = z.object({
      name: stringParam('name', true),
    });

    const result = schema.safeParse({ name: '' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('`name` must be a non-empty string.');
  });
});
