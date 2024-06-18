# refineAtLeastOneNonEmpty

The `refineAtLeastOneNonEmpty` function is used within the refine method of a zod schema to make sure at least one property of the schema is non-empty (not an empty string, undefined, or null).

## Import

```JavaScript
// ESModule Syntax (preferred)
import { refineAtLeastOneNonEmpty } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { refineAtLeastOneNonEmpty } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `refineAtLeastOneNonEmpty` function.

```JavaScript
import { z } from 'zod';
import { refineAtLeastOneNonEmpty } from "@bcgov/citz-imb-express-utilities";

// Define a Zod schema for an object that requires at least one of 
// 'name', 'age', or 'isActive' to be non-empty
const userSchema = z
  .object({
    name: z.string().optional(),
    age: z.number().optional(),
    isActive: z.boolean().optional(),
  })
  .refine(refineAtLeastOneNonEmpty(['name', 'age', 'isActive']), {
    message: "At least one of ['name', 'age', 'isActive'] must be defined and non-empty.",
  });

// Example usage
const exampleData1 = { name: '', age: null, isActive: false };
const result1 = userSchema.safeParse(exampleData1);
console.log(result1.success); // true

const exampleData2 = { name: '', age: null, isActive: null };
const result2 = userSchema.safeParse(exampleData2);
console.log(result2.success); // false

const exampleData3 = { name: 'John', age: 30, isActive: true };
const result3 = userSchema.safeParse(exampleData3);
console.log(result3.success); // true
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: refineAtLeastOneNonEmpty -->
```TypeScript
const refineAtLeastOneNonEmpty: (keys: string[]) => (data: Record<string, unknown>) => boolean;
```

## Parameters

An API reference for the parameters of the `refineAtLeastOneNonEmpty` function.

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
      <td>* keys</td>
      <td>string[]</td>
      <td>-</td>
      <td>The keys of the properties to check.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->
