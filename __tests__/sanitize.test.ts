import { sanitize } from '@/sanitize';

// Test suite for the sanitize function
describe('sanitize', () => {
  // Test case: HTML tags removal
  it('removes HTML tags when removeHTMLTags is true', () => {
    const input = '<div>Content</div>';
    const result = sanitize(input, { removeHTMLTags: true });
    expect(result).toBe('Content');
  });

  // Test case: SQL injection patterns removal
  it('removes SQL injection patterns when removeSQLInjectionPatterns is true', () => {
    const input = 'SELECT * FROM users';
    const result = sanitize(input, { removeSQLInjectionPatterns: true });
    expect(result).toBe(' * FROM users');
  });

  // Test case: script tags removal
  it('removes script tags when removeScriptTags is true', () => {
    const input = '<script>alert("XSS")</script>';
    const result = sanitize(input, { removeScriptTags: true });
    expect(result).toBe('');
  });

  // Test case: NoSQL injection patterns removal
  it('removes NoSQL injection patterns when removeNoSQLInjectionPatterns is true', () => {
    const input = '{ "$where": "this.field == \'value\'" }';
    const result = sanitize(input, { removeNoSQLInjectionPatterns: true });
    expect(result).toBe('{ "": "this.field == \'value\'" }');
  });

  // Test case: All sanitization steps applied
  it('removes all harmful content when all options are true', () => {
    const input =
      '<div>Safe</div> <script>alert("XSS")</script> SELECT * FROM users { "$where": "this.field == \'value\'" }';
    const result = sanitize(input, {
      removeHTMLTags: true,
      removeSQLInjectionPatterns: true,
      removeScriptTags: true,
      removeNoSQLInjectionPatterns: true,
    });
    expect(result).toBe('Safe alert("XSS")  * FROM users { "": "this.field == \'value\'" }');
  });

  // Test case: No sanitization
  it('returns the original input when all options are false', () => {
    const input =
      '<div>Safe</div> <script>alert("XSS")</script> SELECT * FROM users { "$where": "this.field == \'value\'" }';
    const result = sanitize(input, {
      removeHTMLTags: false,
      removeSQLInjectionPatterns: false,
      removeScriptTags: false,
      removeNoSQLInjectionPatterns: false,
    });
    expect(result).toBe(input);
  });

  // Test case: Partial sanitization
  it('removes only specified harmful content based on options', () => {
    const input =
      '<div>Safe</div> <script>alert("XSS")</script> SELECT * FROM users { "$where": "this.field == \'value\'" }';
    const result = sanitize(input, {
      removeHTMLTags: true,
      removeSQLInjectionPatterns: false,
      removeScriptTags: false,
      removeNoSQLInjectionPatterns: true,
    });
    expect(result).toBe('Safe alert("XSS") SELECT * FROM users { "": "this.field == \'value\'" }');
  });
});
