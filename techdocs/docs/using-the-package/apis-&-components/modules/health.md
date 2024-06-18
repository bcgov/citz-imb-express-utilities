# healthModule

The `healthModule` function provides a `/health` endpoint used to check that the Express server is serving traffic.

Call the `/health` endpoint with a `GET` method and if you recieve a `200` status, the server is serving traffic.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { healthModule } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { healthModule } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `healthModule` function.

```JavaScript
import express from 'express';
import { healthModule } from '@bcgov/citz-imb-express-utilities';

// Define Express App
const app = express();

healthModule(app);
```

A basic example of checking the health endpoint as a Docker healthcheck:

```JavaScript
// scripts/healthcheck.js

import https from 'https';

const { BACKEND_URL } = process.env;
const healthCheckUrl = `${BACKEND_URL}/health`;

/**
 * Make a request to the health endpoint.
 * If it returns a 200 status, exit the script with exitCode 0 (terminated with success).
 * If it returns any other status, exit the script with exitCode 1 (terminated with error).
 */
const req = https.request(healthCheckUrl, (res) => {
  process.exitCode = res.statusCode === 200 ? 0 : 1;
});

req.on('error', (error) => {
  console.error(`Healthcheck failed with error: ${error}`);
  process.exit(1);
});

req.end();
```

```YAML
# compose.yaml

services:
  express-api:
    container_name: express-api
    tty: true
    init: true
    restart: on-failure
    healthcheck:
      test: ["CMD-SHELL", "node", "/app/scripts/healthcheck.js"] # Check health endpoint for healthy service.
      interval: 30s # Perform the health check every 30 seconds.
      timeout: 10s # Consider the health check a failure if it takes more than 10 seconds.
      retries: 5 # Retry the health check up to 5 times before considering the container unhealthy.

    # compose file continued...
```

!!! warning "Attention"
    Assumes a Dockerfile where `WORKDIR /app`.

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: healthModule -->
```TypeScript
const healthModule: (app: Application) => void;
```

## Parameters

An API reference for the parameters of the `healthModule` function.

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
      <td>* app</td>
      <td>express.Application</td>
      <td>-</td>
      <td>The express app.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->
