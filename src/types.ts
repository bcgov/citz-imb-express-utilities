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

export type PacificTimeZone = 'PDT' | 'PST';

export type UTCComponents = {
  utcYear: number;
  utcMonth: number;
  utcDate: number;
  utcHours: number;
  utcMinutes: number;
  utcSeconds: number;
};

export type GetCurrentDateTime = {
  formattedDateUTC: string; // year-month-day
  formattedTimeUTC: string; // hours:minutes:seconds
  formattedDatePacific: string; // year-month-day
  formattedTimePacific: string; // hours:minutes:seconds
  pacificTimeZone: PacificTimeZone;
};
