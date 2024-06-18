# booleanParam

The `booleanParam` function returns a zod object which can be used in a zod schema to make sure the schema property is a boolean, and also transforms the string type boolean such as `"true"` into the boolean type `true`.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { booleanParam } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { booleanParam } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `booleanParam` function.

```JavaScript
import { z } from 'zod';
import { booleanParam } from "@bcgov/citz-imb-express-utilities";

// Define a Zod schema for the query parameters
const querySchema = z.object({
  isActive: booleanParam('isActive'),
});

// The following should be inside a route handler (controller) function:

// Validate the query parameters
const result = querySchema.safeParse(req.query);

if (!result.success) {
  // If validation fails, send a 400 response with the validation errors
  return res.status(400).json({ errors: result.error.errors });
}

// Access the transformed boolean value
const { isActive } = result.data;
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: booleanParam -->
```TypeScript
const booleanParam: (param: string, optional?: boolean) => z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>, boolean | undefined, string | undefined> | z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, boolean, string>;
```

## Parameters

An API reference for the parameters of the `booleanParam` function.

!!! note "Note"
    The Name column starting with `*` means the parameter is required.

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
      <td>* param</td>
      <td>string</td>
      <td>-</td>
      <td>The string to validate.</td>
    </tr>
    <tr>
      <td>optional</td>
      <td>boolean</td>
      <td>false</td>
      <td>If the param is optional.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->
