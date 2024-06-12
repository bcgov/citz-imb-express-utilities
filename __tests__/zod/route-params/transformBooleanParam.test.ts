import { z } from 'zod';
import { transformBooleanParam } from '@/zod';

// Test suite for transformBooleanParam
describe('transformBooleanParam', () => {
  // Test case: should validate and transform a required boolean 'true' string
  it('should validate and transform a required boolean "true" string', () => {
    const schema = z.object({
      isActive: transformBooleanParam('isActive'),
    });

    const result = schema.safeParse({ isActive: 'true' });
    expect(result.success).toBe(true);
    expect(result.data?.isActive).toBe(true);
  });

  // Test case: should validate and transform a required boolean 'false' string
  it('should validate and transform a required boolean "false" string', () => {
    const schema = z.object({
      isActive: transformBooleanParam('isActive'),
    });

    const result = schema.safeParse({ isActive: 'false' });
    expect(result.success).toBe(true);
    expect(result.data?.isActive).toBe(false);
  });

  // Test case: should invalidate a non-boolean string for a required field
  it('should invalidate a non-boolean string for a required field', () => {
    const schema = z.object({
      isActive: transformBooleanParam('isActive'),
    });

    const result = schema.safeParse({ isActive: 'yes' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe(
      "`isActive` must be a boolean ('true' or 'false').",
    );
  });

  // Test case: should validate and transform an optional boolean 'true' string
  it('should validate and transform an optional boolean "true" string', () => {
    const schema = z.object({
      isActive: transformBooleanParam('isActive', true),
    });

    const result = schema.safeParse({ isActive: 'true' });
    expect(result.success).toBe(true);
    expect(result.data?.isActive).toBe(true);
  });

  // Test case: should validate and transform an optional boolean 'false' string
  it('should validate and transform an optional boolean "false" string', () => {
    const schema = z.object({
      isActive: transformBooleanParam('isActive', true),
    });

    const result = schema.safeParse({ isActive: 'false' });
    expect(result.success).toBe(true);
    expect(result.data?.isActive).toBe(false);
  });

  // Test case: should validate if the optional boolean is not provided
  it('should validate if the optional boolean is not provided', () => {
    const schema = z.object({
      isActive: transformBooleanParam('isActive', true),
    });

    const result = schema.safeParse({});
    expect(result.success).toBe(true);
    expect(result.data?.isActive).toBeUndefined();
  });

  // Test case: should invalidate a non-boolean string for an optional field
  it('should invalidate a non-boolean string for an optional field', () => {
    const schema = z.object({
      isActive: transformBooleanParam('isActive', true),
    });

    const result = schema.safeParse({ isActive: 'yes' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe(
      "`isActive` must be a boolean ('true' or 'false') or undefined.",
    );
  });
});
