# HTTP_STATUS_CODES

The `HTTP_STATUS_CODES` constant is an enum of Http status codes. It can be used as the first parameter to the [HttpError] class.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { HTTP_STATUS_CODES } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { HTTP_STATUS_CODES } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `HTTP_STATUS_CODES` enum.

```JavaScript
import { Request, Response } from 'express';
import { errorWrapper, HttpError, HTTP_STATUS_CODES } from '@bcgov/citz-imb-express-utilities';

import { ENV } from '../../config';
const { ENVIRONMENT, DEBUG } = ENV;

/**
 * Provide configuration variables to the frontend.
 * @method GET
 * @route /config
 */
export const getConfig = errorWrapper(async (req: Request, res: Response) => {
  if (ENVIRONMENT === 'prod') 
    throw new HttpError(HTTP_STATUS_CODES.BAD_REQUEST, 'Not allowed in production.');

  const configuration = {
    ENVIRONMENT,
    DEBUG,
  };

  res.json(configuration);
});
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: HTTP_STATUS_CODES -->
```TypeScript
const HTTP_STATUS_CODES: {
    readonly OK: 200;
    readonly CREATED: 201;
    readonly ACCEPTED: 202;
    readonly NO_CONTENT: 204;
    readonly NOT_MODIFIED: 304;
    readonly BAD_REQUEST: 400;
    readonly UNAUTHORIZED: 401;
    readonly FORBIDDEN: 403;
    readonly NOT_FOUND: 404;
    readonly METHOD_NOT_ALLOWED: 405;
    readonly IM_A_TEAPOT: 418;
    readonly INTERNAL_SERVER_ERROR: 500;
    readonly NOT_IMPLEMENTED: 501;
    readonly SERVICE_UNAVAIBLABLE: 503;
}
```

Type of `HttpStatusCode`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: HttpStatusCode -->
```TypeScript
type HttpStatusCode = (typeof HTTP_STATUS_CODES)[keyof typeof HTTP_STATUS_CODES];
```

<!-- Link References -->
[HttpError]: ../http-error
