# TypeScript Types

These are the complete TypeScript types available within the package as they are in the bundled build.

For more in depth documentation on types, look at the `APIs & Components` pages.

<!-- DO NOT REMOVE THE FOLLOWING LINES. -->
<!-- This code block is auto generated when types in the package change. -->

<!-- TYPESCRIPT TYPES -->
```TypeScript
import { Request, Response, NextFunction } from 'express';

declare const HTTP_STATUS_CODES: {
    readonly OK: 200;
    readonly CREATED: 201;
    readonly ACCEPTED: 202;
    readonly NO_CONTENT: 204;
    readonly RESET_CONTENT: 205;
    readonly MOVED_PERMANENTLY: 301;
    readonly FOUND: 302;
    readonly SEE_OTHER: 303;
    readonly NOT_MODIFIED: 304;
    readonly TEMPORARY_REDIRECT: 307;
    readonly PERMANENT_REDIRECT: 308;
    readonly BAD_REQUEST: 400;
    readonly UNAUTHORIZED: 401;
    readonly PAYMENT_REQUIRED: 402;
    readonly FORBIDDEN: 403;
    readonly NOT_FOUND: 404;
    readonly METHOD_NOT_ALLOWED: 405;
    readonly CONFLICT: 409;
    readonly GONE: 410;
    readonly LENGTH_REQUIRED: 411;
    readonly PRECONDITION_FAILED: 412;
    readonly PAYLOAD_TOO_LARGE: 413;
    readonly URI_TOO_LONG: 414;
    readonly UNSUPPORTED_MEDIA_TYPE: 415;
    readonly IM_A_TEAPOT: 418;
    readonly MISDIRECTED_REQUEST: 421;
    readonly TOO_MANY_REQUESTS: 429;
    readonly REQUEST_HEADER_FIELDS_TOO_LARGE: 431;
    readonly UNAVAILABLE_FOR_LEGAL_REASONS: 451;
    readonly INTERNAL_SERVER_ERROR: 500;
    readonly NOT_IMPLEMENTED: 501;
    readonly BAD_GATEWAY: 502;
    readonly SERVICE_UNAVAIBLABLE: 503;
    readonly GATEWAY_TIMEOUT: 504;
    readonly NOT_EXTENDED: 510;
};

declare const DEFAULT_CUSTOM_LOG_FUNCTION: ({ method, originalUrl, message, }: RouteHandlerErrorProperties) => void;
declare const DEFAULT_CUSTOM_JSON_RESPONSE: ({ method, originalUrl, message, }: RouteHandlerErrorProperties) => {
    method: string;
    originalUrl: string;
    message: string;
};

type ExpressRouteHandler = (req: Request, res: Response, next: NextFunction) => Promise<void | Response<unknown> | undefined>;
type HttpStatusCode = (typeof HTTP_STATUS_CODES)[keyof typeof HTTP_STATUS_CODES];
type RouteHandlerErrorProperties = {
    method: string;
    originalUrl: string;
    statusCode: HttpStatusCode | number;
    message: string;
};
type ErrorWrapperOptions = {
    customLogFunction?: (props: RouteHandlerErrorProperties) => void;
    customJsonResponse?: (props: RouteHandlerErrorProperties) => object;
};

declare const errorWrapper: (handler: ExpressRouteHandler, options?: ErrorWrapperOptions) => (req: Request, res: Response, next: NextFunction) => Promise<void>;

declare class HttpError extends Error {
    statusCode: HttpStatusCode | number;
    constructor(statusCode: HttpStatusCode | number, message: string);
}

export { DEFAULT_CUSTOM_JSON_RESPONSE, DEFAULT_CUSTOM_LOG_FUNCTION, type ErrorWrapperOptions, type ExpressRouteHandler, HTTP_STATUS_CODES, HttpError, type HttpStatusCode, type RouteHandlerErrorProperties, errorWrapper };
```
