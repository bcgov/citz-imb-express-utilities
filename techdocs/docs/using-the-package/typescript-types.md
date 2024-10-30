# TypeScript Types

These are the complete TypeScript types available within the package as they are in the bundled build.

For more in depth documentation on types, look at the `APIs & Components` pages.

<!-- DO NOT REMOVE THE FOLLOWING LINES. -->
<!-- This code block is auto generated when types in the package change. -->

<!-- TYPESCRIPT TYPES -->
```TypeScript
/// <reference types="qs" />
import { z, ZodSchema } from 'zod';
import * as express from 'express';
import { Request, Response as Response$1, NextFunction, Application } from 'express';
import * as qs from 'qs';
import * as express_serve_static_core from 'express-serve-static-core';

declare const stringParam: (param: string, optional?: boolean) => z.ZodString | z.ZodOptional<z.ZodString>;

declare const booleanParam: (param: string, optional?: boolean) => z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>, boolean | undefined, string | undefined> | z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, boolean, string>;

declare const integerParam: (param: string, optional?: boolean) => z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>, number | undefined, string | undefined> | z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, number, string>;

declare const numberParam: (param: string, optional?: boolean) => z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>, number | undefined, string | undefined> | z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, number, string>;

declare const refineAtLeastOneNonEmpty: (keys: string[]) => (data: Record<string, unknown>) => boolean;

declare const transformRemoveEmpty: <T extends Record<string, unknown>>(obj: T) => Partial<T>;

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

declare const DEFAULT_LOG_FUNCTION: ({ method, originalUrl, message, }: RouteHandlerErrorProperties) => void;

declare const ANSI_CODES: {
    FOREGROUND: {
        BLACK: string;
        RED: string;
        GREEN: string;
        GOLD: string;
        BLUE: string;
        PURPLE: string;
        CYAN: string;
        WHITE: string;
        GREY: string;
        PINK: string;
        LIME: string;
        YELLOW: string;
        LIGHT_BLUE: string;
        MAGENTA: string;
        AQUA: string;
    };
    BACKGROUND: {
        BLACK: string;
        RED: string;
        GREEN: string;
        GOLD: string;
        BLUE: string;
        PURPLE: string;
        CYAN: string;
        WHITE: string;
        GREY: string;
        PINK: string;
        LIME: string;
        YELLOW: string;
        LIGHT_BLUE: string;
        MAGENTA: string;
        AQUA: string;
    };
    FORMATTING: {
        RESET: string;
        BRIGHT: string;
        DIM: string;
        UNDERSCORE: string;
        REVERSE: string;
        ITALIC: string;
        STRIKETHROUGH: string;
    };
};

type ExpressRouteHandler = (req: Request, res: Response$1, next: NextFunction) => Promise<void | Response$1<unknown> | undefined>;
type HttpStatusCode = (typeof HTTP_STATUS_CODES)[keyof typeof HTTP_STATUS_CODES];
type RouteHandlerErrorProperties = {
    method: string;
    originalUrl: string;
    statusCode: HttpStatusCode | number;
    message: string;
};
type ErrorWrapperOptions = {
    logFunction?: (props: RouteHandlerErrorProperties) => void;
};
type PacificTimeZone = 'PDT' | 'PST';
type UTCComponents = {
    utcYear: number;
    utcMonth: number;
    utcDate: number;
    utcHours: number;
    utcMinutes: number;
    utcSeconds: number;
};
type GetCurrentDateTime = {
    formattedDateUTC: string;
    formattedTimeUTC: string;
    formattedDatePacific: string;
    formattedTimePacific: string;
    pacificTimeZone: PacificTimeZone;
};
type ZodValidationErrorDetail = {
    path: (string | number)[];
    expected: string;
    received: string;
    message: string;
};
type StandardResponseInput<TData> = {
    success?: boolean;
    data?: TData;
    message?: string;
};
type StandardResponse<TData> = {
    success: boolean;
    data?: TData;
    message: string;
    responseDateUTC: string;
    responseTimeUTC: string;
    responseTimeInMs: string;
};
type SanitizeOptions = {
    removeHTMLTags?: boolean;
    removeSQLInjectionPatterns?: boolean;
    removeScriptTags?: boolean;
    removeNoSQLInjectionPatterns?: boolean;
};
type ZodValidationOptions = {
    sanitizationOptions?: SanitizeOptions;
};
declare module 'express-serve-static-core' {
    interface Request {
        getZodValidatedParams: (schema: ZodSchema<unknown>, options?: ZodValidationOptions) => any;
        getZodValidatedQuery: (schema: ZodSchema<unknown>, options?: ZodValidationOptions) => any;
        getZodValidatedBody: (schema: ZodSchema<unknown>, options?: ZodValidationOptions) => any;
        getElapsedTimeInMs: () => string;
        getStandardResponse: <TData>(inputData: StandardResponseInput<TData>) => StandardResponse<TData>;
    }
}

declare const validateZodRequestSchema: (obj: Record<string, unknown>, schema: ZodSchema<unknown>, errorMsgPrefix: string, options?: ZodValidationOptions) => unknown;

declare const zodValidationMiddlewareFunctions: (req: Request) => void;

declare const errorWrapper: (handler: ExpressRouteHandler, options?: ErrorWrapperOptions) => (req: Request, res: Response$1, next: NextFunction) => Promise<void>;

declare class HttpError extends Error {
    statusCode: HttpStatusCode | number;
    constructor(statusCode: HttpStatusCode | number, message: string);
}

declare const healthModule: (app: Application) => void;
declare const configModule: (app: Application, config: object) => void;

declare const serverStartupLogs: (port?: number | string) => void;

declare const expressUtilitiesMiddleware: (req: Request, res: Response$1, next: NextFunction) => void;

declare const safePromise: (promise: Promise<Response>) => Promise<[Error, null] | [null, Response]>;

declare const sanitize: (input: string, options?: SanitizeOptions) => string;

declare const standardResponse: <TData>(dataInput: StandardResponseInput<TData>, req: Request) => StandardResponse<TData>;

declare const validUser: {
    username: string;
    email: string;
    password: string;
};
declare const invalidUser: {
    username: string;
    email: string;
    password: string;
};
declare const validProduct: {
    name: string;
    price: number;
    inStock: boolean;
};
declare const invalidProduct: {
    name: string;
    price: number;
    inStock: string;
};
declare const validBlogPost: {
    title: string;
    content: string;
    published: boolean;
    tags: string[];
};
declare const invalidBlogPost: {
    title: string;
    content: string;
    published: string;
    tags: string;
};
declare const unsanitizedUser: {
    username: string;
    email: string;
    password: string;
};
declare const sanitizedUser: {
    username: string;
    email: string;
    password: string;
};

declare const userSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
}, {
    username: string;
    email: string;
    password: string;
}>;
declare const productSchema: z.ZodObject<{
    name: z.ZodString;
    price: z.ZodNumber;
    inStock: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    name: string;
    price: number;
    inStock: boolean;
}, {
    name: string;
    price: number;
    inStock: boolean;
}>;
declare const blogPostSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodBoolean;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    published: boolean;
    tags?: string[] | undefined;
}, {
    title: string;
    content: string;
    published: boolean;
    tags?: string[] | undefined;
}>;

declare const elapsedTimeMiddlewareFunction: (req: Request) => void;

declare const getCurrentDateTime: () => GetCurrentDateTime;

declare const getConfig: (config: object) => (req: Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>, res: Response$1<any, Record<string, any>>, next: express.NextFunction) => Promise<void>;

declare const configRouter: (config: object) => express_serve_static_core.Router;

declare const isHealthy: (req: Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>, res: Response$1<any, Record<string, any>>, next: express.NextFunction) => Promise<void>;

export { ANSI_CODES, DEFAULT_LOG_FUNCTION, type ErrorWrapperOptions, type ExpressRouteHandler, type GetCurrentDateTime, HTTP_STATUS_CODES, HttpError, type HttpStatusCode, type PacificTimeZone, type RouteHandlerErrorProperties, type SanitizeOptions, type StandardResponse, type StandardResponseInput, type UTCComponents, type ZodValidationErrorDetail, type ZodValidationOptions, blogPostSchema, booleanParam, configModule, configRouter, elapsedTimeMiddlewareFunction, errorWrapper, expressUtilitiesMiddleware, getConfig, getCurrentDateTime, healthModule, integerParam, invalidBlogPost, invalidProduct, invalidUser, isHealthy, numberParam, productSchema, refineAtLeastOneNonEmpty, safePromise, sanitize, sanitizedUser, serverStartupLogs, standardResponse, stringParam, transformRemoveEmpty, unsanitizedUser, userSchema, validBlogPost, validProduct, validUser, validateZodRequestSchema, zodValidationMiddlewareFunctions };
```
