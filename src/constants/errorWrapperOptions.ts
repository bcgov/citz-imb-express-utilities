import { RouteHandlerErrorProperties } from '../types';

export const DEFAULT_LOG_FUNCTION = ({
  method,
  originalUrl,
  message,
}: RouteHandlerErrorProperties) => {
  console.error(`REQUEST ERROR: [${method}] ${originalUrl}: ${message}`);
};
