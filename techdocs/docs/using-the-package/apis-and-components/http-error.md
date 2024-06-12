# HttpError

The `HttpError` class is an extension of the the Error class and can be thrown with a status code and message. By throwing `HttpError` within a express route handler (controller) that is wrapped in an [errorWrapper], you can provide additional details such as the status code and a custom error message.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { HttpError } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { HttpError } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `HttpError` class.

```JavaScript
import { Request, Response } from 'express';
import { errorWrapper, HttpError } from '@bcgov/citz-imb-express-utilities';

import { ENV } from '../../config';
const { ENVIRONMENT, DEBUG } = ENV;

/**
 * Provide configuration variables to the frontend.
 * @method GET
 * @route /config
 */
export const getConfig = errorWrapper(async (req: Request, res: Response) => {
  if (ENVIRONMENT === 'prod') throw new HttpError(400, 'Not allowed in production.');

  const configuration = {
    ENVIRONMENT,
    DEBUG,
  };

  res.json(configuration);
});
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: HttpError -->
```TypeScript
class HttpError extends Error {
    statusCode: HttpStatusCode | number;
    constructor(statusCode: HttpStatusCode | number, message: string);
}
```

Type of `HttpStatusCode`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: HttpStatusCode -->
```TypeScript
type HttpStatusCode = (typeof HTTP_STATUS_CODES)[keyof typeof HTTP_STATUS_CODES];
```

!!! info "Info"
    Find out more about `HttpStatusCode` at [HTTP_STATUS_CODES].

## Parameters

An API reference for the parameters of the `HttpError` class.

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
      <td>* statusCode</td>
      <td>HttpStatusCode | number</td>
      <td>-</td>
      <td>The status code to be sent to the client when the error is thrown.</td>
    </tr>
    <tr>
      <td>* message</td>
      <td>string</td>
      <td>-</td>
      <td>The message to be sent to the client when the error is thrown.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->
[HttpError]: ../http-error
[HTTP_STATUS_CODES]: ../http-status-codes
