# standardResponse

The `standardResponse` function is used to standardize the JSON response structure for responses.

## Usage

A basic example of using the `standardResponse` function.

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
  const { standardResponse } = res;
  const pathParams = getZodValidatedParams(paramSchema);

  // Get item from database using path params as a where clause
  const item = await getItemFromDBWhere(pathParams);

  const response = {
    success: true,
    data: items,
  }
  res.status(HTTP_STATUS_CODES.OK).json(standardResponse(response));
});
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: Response -->
```TypeScript
interface Response {
        getElapsedTimeInMs: () => string;
        getStandardResponse: (inputData: StandardResponseInput) => StandardResponse;
    }
```

Type of `StandardResponseInput`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: StandardResponseInput -->
```TypeScript
type StandardResponseInput = {
    success: boolean;
    data: object;
    message?: string;
}
```

Type of `StandardResponse`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: StandardResponse -->
```TypeScript
type StandardResponse = {
    success: boolean;
    data: object;
    message: string;
    responseDateUTC: string;
    responseTimeUTC: string;
    responseTimeInMs: string;
}
```

## Parameters

An API reference for the parameters of the `standardResponse` function.

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
      <td>data</td>
      <td>StandardResponseInput</td>
      <td>-</td>
      <td>The data to send in the response.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->
