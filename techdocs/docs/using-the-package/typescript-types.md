# TypeScript Types

These are the complete TypeScript types available within the package as they are in the bundled build.

For more in depth documentation on types, look at the `APIs & Components` pages.

<!-- DO NOT REMOVE THE FOLLOWING LINES. -->
<!-- This code block is auto generated when types in the package change. -->

<!-- TYPESCRIPT TYPES -->
```TypeScript
import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode as HttpStatusCode$1 } from 'src/constants';

type ExpressRouteHandler = (req: Request, res: Response, next: NextFunction) => Promise<void | Response<unknown> | undefined>;

declare const errorWrapper: (handler: ExpressRouteHandler) => (req: Request, res: Response, next: NextFunction) => Promise<void>;

declare class HttpError extends Error {
    statusCode: HttpStatusCode$1 | number;
    constructor(statusCode: HttpStatusCode$1 | number, message: string);
}

declare const HTTP_STATUS_CODES: {
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
};
type HttpStatusCode = (typeof HTTP_STATUS_CODES)[keyof typeof HTTP_STATUS_CODES];

export { type ExpressRouteHandler, HTTP_STATUS_CODES, HttpError, type HttpStatusCode, errorWrapper };
```
