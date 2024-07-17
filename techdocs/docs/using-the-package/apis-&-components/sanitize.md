# sanitize

The `sanitize` function is used to remove harmful strings from an input string.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { sanitize } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { sanitize } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `sanitize` function.

```JavaScript
import app from './express';
import { sanitize } from "@bcgov/citz-imb-express-utilities";

// Example input strings
const input1 = '<div>Safe content</div> <script>alert("XSS")</script>';
const input2 = 'SELECT * FROM users WHERE name = "admin"';
const input3 = '{ "$where": "this.field == \'value\'" }';

// Example usage with different options

// 1. Remove only HTML tags
const sanitized1 = sanitize(input1, { removeHTMLTags: true });
console.log(sanitized1); // Output: Safe content alert("XSS")

// 2. Remove HTML tags and JavaScript code
const sanitized2 = sanitize(input1, { removeHTMLTags: true, removeJavaScriptCode: true });
console.log(sanitized2); // Output: Safe content

// 3. Remove SQL injection patterns
const sanitized3 = sanitize(input2, { removeSQLInjectionPatterns: true });
console.log(sanitized3); // Output:  * FROM users WHERE name = "admin"

// 4. Remove NoSQL injection patterns
const sanitized4 = sanitize(input3, { removeNoSQLInjectionPatterns: true });
console.log(sanitized4); // Output: { "": "this.field == 'value'" }

// 5. Apply all sanitization steps
const sanitized5 = sanitize(input1, {
  removeHTMLTags: true,
  removeSQLInjectionPatterns: true,
  removeJavaScriptCode: true,
  removeNoSQLInjectionPatterns: true,
});
console.log(sanitized5); // Output: Safe content

// 6. No sanitization applied
const sanitized6 = sanitize(input1, {
  removeHTMLTags: false,
  removeSQLInjectionPatterns: false,
  removeJavaScriptCode: false,
  removeNoSQLInjectionPatterns: false,
});
console.log(sanitized6); // Output: <div>Safe content</div> <script>alert("XSS")</script>
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: sanitize -->

```TypeScript
const sanitize: (input: string, options?: SanitizeOptions) => string;
```

Type of `SanitizeOptions`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: SanitizeOptions -->

```TypeScript
type SanitizeOptions = {
    removeHTMLTags?: boolean;
    removeSQLInjectionPatterns?: boolean;
    removeScriptTags?: boolean;
    removeNoSQLInjectionPatterns?: boolean;
}
```

## Parameters

An API reference for the parameters of the `sanitize` function.

!!! note "Note"
The Name column starting with `*` means the prop is required.

<table>
  <!-- Table columns -->
  <thead>
    <tr>
      <th style="background: #6f19d9; color: white;">Name</th>
      <th style="background: #6f19d9; color: white;">Type</th>
      <th style="background: #6f19d9; color: white;">Default</th>
      <th style="background: #6f19d9; color: white;">Description</th>
    </tr>
  </thead>

  <!-- Table rows -->
  <tbody>
    <tr>
      <td>input</td>
      <td>string</td>
      <td>-</td>
      <td>The potentially malicious input string.</td>
    </tr>
    <tr>
      <td>options</td>
      <td>SanitizeOptions</td>
      <td>{ removeHTMLTags: true, removeSQLInjectionPatterns: true, removeJavaScriptCode: true, removeNoSQLInjectionPatterns: true }</td>
      <td>Configuration options.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->
