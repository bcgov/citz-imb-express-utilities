/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS_CODES } from './constants';

export type ExpressRouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void | Response<unknown> | undefined>;

export type HttpStatusCode = (typeof HTTP_STATUS_CODES)[keyof typeof HTTP_STATUS_CODES];

export type RouteHandlerErrorProperties = {
  method: string;
  originalUrl: string;
  statusCode: HttpStatusCode | number;
  message: string;
};

export type ErrorWrapperOptions = {
  customLogFunction?: (props: RouteHandlerErrorProperties) => void;
  customJsonResponse?: (props: RouteHandlerErrorProperties) => object;
};

export type ZodValidationErrorDetail = {
  path: (string | number)[];
  expected: string;
  received: string;
  message: string;
};
