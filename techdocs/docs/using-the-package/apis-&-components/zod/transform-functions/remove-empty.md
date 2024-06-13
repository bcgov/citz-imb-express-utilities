# transformRemoveEmpty

The `transformRemoveEmpty` function is used within the transform method of a zod schema to transform the data by removing any properties of the object that are empty (empty string, undefined, or null).

## Import

```JavaScript
// ESModule Syntax (preferred)
import { transformRemoveEmpty } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { transformRemoveEmpty } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `transformRemoveEmpty` function.

```JavaScript
import { z } from 'zod';
import { transformRemoveEmpty } from "@bcgov/citz-imb-express-utilities";

// Define a Zod schema for an object that removes empty properties
const userSchema = z
  .object({
    name: z.string().optional(),
    age: z.number().optional(),
    email: z.string().optional(),
    isActive: z.boolean().optional(),
  })
  .transform((data) => transformRemoveEmpty(data));

// Example usage
const exampleData1 = { name: '', age: null, email: 'user@example.com', isActive: true };
const result1 = userSchema.parse(exampleData1);
console.log(result1); // Output: { email: 'user@example.com', isActive: true }

const exampleData2 = { name: 'John', age: 30, email: '', isActive: undefined };
const result2 = userSchema.parse(exampleData2);
console.log(result2); // Output: { name: 'John', age: 30 }

const exampleData3 = { name: null, age: undefined, email: 'john@example.com', isActive: false };
const result3 = userSchema.parse(exampleData3);
console.log(result3); // Output: { email: 'john@example.com', isActive: false }
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: transformRemoveEmpty -->
```TypeScript
const transformRemoveEmpty: <T extends Record<string, unknown>>(obj: T) => Partial<T>;
```

## Parameters

An API reference for the parameters of the `transformRemoveEmpty` function.

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
      <td>* obj</td>
      <td>T</td>
      <td>-</td>
      <td>The object to transform.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->
