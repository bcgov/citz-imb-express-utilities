# stringParam

The `stringParam` function returns a zod object which can be used in a zod schema to make sure the schema property is a non-empty string.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { stringParam } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { stringParam } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `stringParam` function.

```JavaScript
import { z } from 'zod';
import { stringParam } from "@bcgov/citz-imb-express-utilities";

// Define a Zod schema for the query parameters
const querySchema = z.object({
  name: stringParam('name'),
});

// The following should be inside a route handler (controller) function:

// Validate the query parameters
const result = querySchema.safeParse(req.query);

if (!result.success) {
  // If validation fails, send a 400 response with the validation errors
  return res.status(400).json({ errors: result.error.errors });
}
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: stringParam -->
```TypeScript
const stringParam: (param: string, optional?: boolean) => z.ZodString | z.ZodOptional<z.ZodString>;
```

## Parameters

An API reference for the parameters of the `stringParam` function.

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
