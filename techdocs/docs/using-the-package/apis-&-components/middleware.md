# expressUtilitiesMiddleware

The `expressUtilitiesMiddleware` function is Express middleware that will add utility functions to the request and response objects. All routes defined after the definition of this middleware will have access to it's functions.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { expressUtilitiesMiddleware } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { expressUtilitiesMiddleware } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `expressUtilitiesMiddleware` function in your express app.

```JavaScript
import express from 'express';
import { healthRouter } from './modules';
import { expressUtilitiesMiddleware } from '@bcgov/citz-imb-express-utilities';

// Define Express App
const app = express();

// Add utility functions.
app.use(expressUtilitiesMiddleware);

// Routing
app.use('/health', healthRouter);
```

!!! warning "Reminder"
    Be sure to place this middleware before you define any routes that you would like to use this on.

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: expressUtilitiesMiddleware -->
```TypeScript
const expressUtilitiesMiddleware: (req: Request, res: Response$1, next: NextFunction) => void;
```

<!-- Link References -->
