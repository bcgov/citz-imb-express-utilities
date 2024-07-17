# req.getZodValidatedParams

The `req.getZodValidatedParams` function takes in [Zod Object Schema] as input and then outputs the path parameters on the Express request object as if using `req.params`. 

The difference is that the path params will be validated against the schema and transformed if the schema involves transforming the data. If an error is caught in the validation, an [HttpError] will be thrown.

!!! warning "Attention"
    The use of this function requires the use of the [expressUtilitiesMiddleware]. You can access it as part of the request object on Express route handlers (controllers).

## Usage

A basic example of using the `getZodValidatedParams` function.

```JavaScript
import { z } from 'zod';
import { Request, Response } from 'express';
import { errorWrapper, HTTP_STATUS_CODES, stringParam } from '@bcgov/citz-imb-express-utilities';

// Create schema
const paramSchema = z.object({
    id: stringParam('id'),
  });

// Route handler (controller)
export const getItem = errorWrapper(async (req: Request, res: Response) => {
  const { getZodValidatedParams } = req;
  const pathParams = getZodValidatedParams(paramSchema);

  // Get item from database using path params as a where clause
  const item = await getItemFromDBWhere(pathParams);

  res.status(HTTP_STATUS_CODES.OK).json(items);
});
```

## TypeScript Type

Type of extended Express Request:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: Request -->
```TypeScript
interface Request {
        getZodValidatedParams: (schema: ZodSchema<unknown>, options?: ZodValidationOptions) => any;
        getZodValidatedQuery: (schema: ZodSchema<unknown>, options?: ZodValidationOptions) => any;
        getZodValidatedBody: (schema: ZodSchema<unknown>, options?: ZodValidationOptions) => any;
    }
```

## Parameters

An API reference for the parameters of the `getZodValidatedParams` function.

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
      <td>ZodSchema<unknown></td>
      <td>-</td>
      <td>The schema object to validate.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->
[Zod Object Schema]: https://zod.dev/?id=objects
[HttpError]: ../../../http-error
[expressUtilitiesMiddleware]: ../../../middleware
