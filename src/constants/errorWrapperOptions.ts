import { RouteHandlerErrorProperties } from '../types';

export const DEFAULT_CUSTOM_LOG_FUNCTION = ({
  method,
  originalUrl,
  message,
}: RouteHandlerErrorProperties) => {
  console.error(`REQUEST ERROR: [${method}] ${originalUrl}: ${message}`);
};
export const DEFAULT_CUSTOM_JSON_RESPONSE = ({
  method,
  originalUrl,
  message,
}: RouteHandlerErrorProperties) => ({
  method,
  originalUrl,
  message,
});
