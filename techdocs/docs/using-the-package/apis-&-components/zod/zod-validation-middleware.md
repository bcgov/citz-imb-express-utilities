# zodValidationMiddleware

The `zodValidationMiddleware` function is Express middleware that will add zod validation functions to the request object. All routes defined after the definition of this middleware will have access to it's functions.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { zodValidationMiddleware } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { zodValidationMiddleware } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `zodValidationMiddleware` function in your express app.

```JavaScript
import express from 'express';
import { healthRouter } from './modules';
import { zodValidationMiddleware } from '@bcgov/citz-imb-express-utilities';

// Define Express App
const app = express();

// Add zod validation functions.
app.use(zodValidationMiddleware);

// Routing
app.use('/health', healthRouter);
```

!!! warning "Reminder"
    Be sure to place this middleware before you define any routes that you would like to use this on.

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: zodValidationMiddleware -->
```TypeScript
const zodValidationMiddleware: (req: Request, res: Response, next: NextFunction) => void;
```

<!-- Link References -->
