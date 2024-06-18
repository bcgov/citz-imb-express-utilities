# configModule

The `configModule` function provides a `/config` endpoint used to pass configuration variables to the frontend.

!!! warning "Warning"
    DO NOT send secrets or confidential data through this endpoint. It is not secure to pass these along to the frontend and you should find another solution that doesnt involve sending or storing secrets in the frontend.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { configModule } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { configModule } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `configModule` function.

```JavaScript
import express from 'express';
import { configModule } from '@bcgov/citz-imb-express-utilities';

// Define Express App
const app = express();

configModule(app);
```

A basic example of calling the config route in the frontend:

```TypeScript
// src/globals.ts

// Allow Window.configuration from config endpoint.
interface Window {
  configuration: Record<string, unknown>;
}
```

```TypeScript
// src/App.tsx

// Fetchs config data and sets it on the window object 
// so it can be accessed from anywhere in the application using window.configuration.
export const App = () => {
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/health');
      const config = await response.data();
      window.configuration = config;
    });
  }, []);

  return (
    // ...
  )
}
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: configModule -->
```TypeScript
const configModule: (app: Application, config: object) => void;
```

## Parameters

An API reference for the parameters of the `configModule` function.

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
    <tr>
      <td>* config</td>
      <td>object</td>
      <td>-</td>
      <td>The JSON object to send to the frontend.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->
