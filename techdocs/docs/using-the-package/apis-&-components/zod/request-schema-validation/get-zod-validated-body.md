# req.getZodValidatedBody

The `req.getZodValidatedBody` function takes in [Zod Object Schema] as input and then outputs the request body on the Express request object as if using `req.body`.

The difference is that the request body will be validated against the schema and transformed if the schema involves transforming the data. If an error is caught in the validation, an [HttpError] will be thrown.

!!! warning "Attention"
    The use of this function requires the use of the [expressUtilitiesMiddleware]. You can access it as part of the request object on Express route handlers (controllers).

!!! note "Note"
    String properties in the body will be sanitized using the [sanitize] function by default. You can modify this with the `options` parameter.

## Usage

A basic example of using the `getZodValidatedBody` function.

```JavaScript
import { z } from 'zod';
import { Request, Response } from 'express';
import { errorWrapper, HTTP_STATUS_CODES, stringParam } from '@bcgov/citz-imb-express-utilities';

// Create schema
const bodySchema = z.object({
    owner: stringParam('owner', true),
    category: stringParam('category' true),
  });

// Route handler (controller)
export const getItems = errorWrapper(async (req: Request, res: Response) => {
  const { getZodValidatedBody } = req;
  const body = getZodValidatedBody(bodySchema);

  // Get items from database using body params as a where clause
  const items = await getItemsFromDBWhere(body);

  res.status(HTTP_STATUS_CODES.OK).json(items);
});
```

## TypeScript Type

Type of extended Express Request:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: Request -->

```TypeScript
//placeholder
```

Type of `ZodValidationOptions`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: ZodValidationOptions -->

```TypeScript
//placeholder
```

## Parameters

An API reference for the parameters of the `getZodValidatedBody` function.

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
      <td>* schema</td>
      <td>ZodSchema&lt;unknown\&gt;</td>
      <td>-</td>
      <td>The schema object to validate.</td>
    </tr>
    <tr>
      <td>options</td>
      <td>ZodValidationOptions</td>
      <td>{ sanitizationOptions: { removeHTMLTags: true, removeSQLInjectionPatterns: true, removeScriptTags: true, removeNoSQLInjectionPatterns: true } }</td>
      <td>Configuration Options.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->

[Zod Object Schema]: https://zod.dev/?id=objects
[HttpError]: ../../../http-error
[sanitize]: ../../../sanitize
[expressUtilitiesMiddleware]: ../../../middleware
