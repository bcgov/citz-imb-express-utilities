/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';

export type ExpressRouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void | Response<unknown> | undefined>;
