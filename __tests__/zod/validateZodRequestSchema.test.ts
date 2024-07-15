import { HttpError } from '@/classes';
import { validateZodRequestSchema } from '@/zod';
import {
  invalidBlogPost,
  invalidProduct,
  invalidUser,
  validBlogPost,
  validProduct,
  validUser,
  unsanitizedUser,
  sanitizedUser,
} from '__tests__/__mocks__/zodSchemaData';
import { blogPostSchema, productSchema, userSchema } from '__tests__/__mocks__/zodSchemas';

// Test suite for the validateZodRequestSchema function
describe('validateZodRequestSchema', () => {
  // Test case: Validate a valid user object
  it('should validate a valid user object', () => {
    const result = validateZodRequestSchema(validUser, userSchema, 'User validation failed: ');
    expect(result).toEqual(validUser);
  });

  // Test case: Validate an invalid user object
  it('should throw an error for an invalid user object', () => {
    expect(() =>
      validateZodRequestSchema(invalidUser, userSchema, 'User validation failed: '),
    ).toThrow(HttpError);
  });

  // Test case: Validate a valid product object
  it('should validate a valid product object', () => {
    const result = validateZodRequestSchema(
      validProduct,
      productSchema,
      'Product validation failed: ',
    );
    expect(result).toEqual(validProduct);
  });

  // Test case: Validate an invalid product object
  it('should throw an error for an invalid product object', () => {
    expect(() =>
      validateZodRequestSchema(invalidProduct, productSchema, 'Product validation failed: '),
    ).toThrow(HttpError);
  });

  // Test case: Validate a valid blog post object
  it('should validate a valid blog post object', () => {
    const result = validateZodRequestSchema(
      validBlogPost,
      blogPostSchema,
      'Blog post validation failed: ',
    );
    expect(result).toEqual(validBlogPost);
  });

  // Test case: Validate an invalid blog post object
  it('should throw an error for an invalid blog post object', () => {
    expect(() =>
      validateZodRequestSchema(invalidBlogPost, blogPostSchema, 'Blog post validation failed: '),
    ).toThrow(HttpError);
  });

  // Test case: Validate and sanitize a user object with unsanitized input
  it('should sanitize and validate a user object with unsanitized input', () => {
    const result = validateZodRequestSchema(
      unsanitizedUser,
      userSchema,
      'User validation failed: ',
    );
    expect(result).toEqual(sanitizedUser);
  });
});
