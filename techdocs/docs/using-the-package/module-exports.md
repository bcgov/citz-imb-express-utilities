# Module Exports

These are the functions and types exported by the package.

```JavaScript
import {
  errorWrapper, // Wrapper for route handler (controller) functions to provide error handling.
  HttpError, // Extension of Error class to include http status code.
  HTTP_STATUS_CODES, // Enum of http status codes.
  healthModule, // Provides a health endpoint.
  configModule, // Provides a config endpoint.
  refineAtLeastOneNonEmpty, // Used in .refine method of zod schema.
  transformRemoveEmpty, // Used in .transform method of zod schema.
  stringParam, // Used to validate route path & query params as a string.
  booleanParam, // Used to validate route path & query params as a boolean.
  numberParam, // Used to validate route path & query params as a number.
  integerParam, // Used to validate route path & query params as an integer.
  serverStartupLogs, // Used to log useful server startup information.
} from '@bcgov/citz-imb-express-utilities';

// TypeScript Types:
import {
  HttpStatusCode, // Type of a property in HTTP_STATUS_CODES
  ExpressRouteHandler, // Type of handler parameter to errorWrapper.
  RouteHandlerErrorProperties, // Properties given in errorWrapper options functions.
  ErrorWrapperOptions, // Configuration options for errorWrapper.
  StandardResponseInput, // The input data for the standardResponse function.
  StandardResponse, // The JSOn object returned by standardResponse.
} from '@bcgov/citz-imb-express-utilities';
```
