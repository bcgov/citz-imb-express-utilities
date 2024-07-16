# errorWrapper

The `errorWrapper` function is used as a wrapper for express route handlers (controllers) to provided error handling logic.

!!! tip "Tip"
Throw an [HttpError] in your route handler (controller) function to specify the status code for the error such as `404` for "Not Found", as well as a custom error message.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { errorWrapper } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { errorWrapper } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `errorWrapper` function.

```JavaScript
import { Request, Response } from 'express';
import { errorWrapper, HttpError, HTTP_STATUS_CODES } from '@bcgov/citz-imb-express-utilities';
import { createUser } from './services/userService';

/**
 * Create a new user.
 * @method POST
 * @route /users
 */
export const createUser = errorWrapper(async (req: Request, res: Response) => {
  const { name, email } = req.body;

  // Validate request body
  if (!name || !email)
    throw new HttpError(HTTP_STATUS_CODES.BAD_REQUEST, 'Name and email are required');

  // Call the service to create a new user
  const newUser = await createUser({ name, email });

  // Send a success response
  res.status(201).json({ message: 'User created successfully', user: newUser });
});
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: errorWrapper -->

```TypeScript
const errorWrapper: (handler: ExpressRouteHandler, options?: ErrorWrapperOptions) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
```

Type of `ExpressRouteHandler`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: ExpressRouteHandler -->

```TypeScript
type ExpressRouteHandler = (req: Request, res: Response, next: NextFunction) => Promise<void | Response<unknown> | undefined>;
```

Type of `ErrorWrapperOptions`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: ErrorWrapperOptions -->

```TypeScript
type ErrorWrapperOptions = {
    logFunction?: (props: RouteHandlerErrorProperties) => void;
}
```

Type of `RouteHandlerErrorProperties`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: RouteHandlerErrorProperties -->

```TypeScript
type RouteHandlerErrorProperties = {
    method: string;
    originalUrl: string;
    statusCode: HttpStatusCode | number;
    message: string;
}
```

## Parameters

An API reference for the parameters of the `errorWrapper` function.

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
      <td>* handler</td>
      <td>ExpressRouteHandler</td>
      <td>-</td>
      <td>The express route handler (controller) function that is called when accessing a route.</td>
    </tr>
    <tr>
      <td>options</td>
      <td>ErrorWrapperOptions</td>
      <td>-</td>
      <td>Configuration options.</td>
    </tr>
    <tr>
      <td>options.logFunction</td>
      <td>(props: RouteHandlerErrorProperties) => void;</td>
      <td>-</td>
      <td>Custom function to call instead of the default log message.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->

[HttpError]: ../http-error
