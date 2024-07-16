# Quick Start Guide

Set up in 3 steps.

### 1. Server Startup Logs

Add import for [serverStartupLogs] where you initialize your express server such as `index.ts`.

This will provide useful information on server startup.

Additionally when you want to log messages to the console and include color, use [ANSI_CODES].

Here is an example of what the logs will look like:

![server-startup-logs](../../images/server_startup_logs.PNG)

#### `Example:`

```JavaScript
import app from './express';
import { serverStartupLogs } from '@bcgov/citz-imb-express-utilities';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  try {
    // Log server start information.
    serverStartupLogs(PORT);
  } catch (error) {
    // Log any error that occurs during the server start.
    console.error(error);
  }
});
```

---

<br />

### 2. Add Reusable Modules & Middleware

Add import for [healthModule], [configModule], and [expressUtilitiesMiddleware] where you express app is defined such as `express.ts`.

This will provide you with the following endpoints:

- `GET /health` - Receiving a 200 status code means the server is functional.
- `GET /config` - Returns a configuration object. Useful for telling the frontend which environment it's in.

#### `Example:`

```JavaScript
import {
  expressUtilitiesMiddleware,
  healthModule,
  configModule,
} from '@bcgov/citz-imb-express-utilities';
import express from 'express';

// Define Express App
const app = express();

// Add express utils middleware.
app.use(expressUtilitiesMiddleware);

const configuration = {
  ENVIRONMENT: process.env.ENVIRONMENT,
};

// Routing
healthModule(app); // Route /health
configModule(app, configuration); // Route /config

export default app;
```

---

<br />

### 3. Use Utilities in Route Handlers (Controllers)

Add import for [errorWrapper], [HttpError], and [HTTP_STATUS_CODES] to your route handler (controller) files.

The [errorWrapper] will handle all errors thrown within the controller, sending an appropriate response to the client, and logging a useful message in the console.

It is advised you use [HttpError] to throw errors with an HTTP status code, and use [HTTP_STATUS_CODES] enum for these HTTP codes.

As long as [expressUtilitiesMiddleware] is being used, you have access to [getZodValidatedBody], [getStandardResponse], and other properties defined in the `Request` type below:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: Request -->

```TypeScript
// placeholder
```

The [getZodValidatedBody] function validates the request body against a [Zod Object Schema] schema and returns the processed data, which in this example is destructured as `name` and `email`.

The [getStandardResponse] function takes in some response data and returns a standarized response JSON object.

### `Example:`

```TypeScript
import { Request, Response } from 'express';
import { errorWrapper, HttpError, HTTP_STATUS_CODES } from '@bcgov/citz-imb-express-utilities';
import { createUser } from './services/userService';

// Create schema
const bodySchema = z.object({
    name: stringParam('name'), // validates a non-empty string
    email: stringParam('email' true), // true means its optional
  });

/**
 * Create a new user.
 * @method POST
 * @route /users
 */
export const createUser = errorWrapper(async (req: Request, res: Response) => {
  const { getZodValidatedBody, getStandardResponse } = req;
  const { name, email } = getZodValidatedBody(bodySchema); // Validates request body

  // Call the service to create a new user
  const newUser = await createUser({ name, email });

  if (!newUser) throw HttpError(HTTP_STATUS_CODES.BAD_REQUEST, 'User could not be created.');

  // Send a success response
  const response =
    getStandardResponse({ message: 'User created successfully', data: { user: newUser } });
  res.status(HTTP_STATUS_CODES.CREATED).json(response);
});
```

<!-- Link References -->

[expressUtilitiesMiddleware]: ../../using-the-package/apis-&-components/middleware
[healthModule]: ../../using-the-package/apis-&-components/modules/health
[configModule]: ../../using-the-package/apis-&-components/modules/config
[errorWrapper]: ../../using-the-package/apis-&-components/error-wrapper
[HttpError]: ../../using-the-package/apis-&-components/http-error
[ANSI_CODES]: ../../using-the-package/apis-&-components/ansi-codes
[serverStartupLogs]: ../../using-the-package/apis-&-components/server-startup-logs
[HTTP_STATUS_CODES]: ../../using-the-package/apis-&-components/http-status-codes
[Zod Object Schema]: https://zod.dev/?id=objects
