import { RouteHandlerErrorProperties } from 'src/types';

export const DEFAULT_CUSTOM_LOG_FUNCTION = ({
  method,
  originalUrl,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  statusCode,
  message,
}: RouteHandlerErrorProperties) => {
  console.error(`REQUEST ERROR: [${method}] ${originalUrl}: ${message}`);
};
export const DEFAULT_CUSTOM_JSON_RESPONSE = ({
  method,
  originalUrl,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  statusCode,
  message,
}: RouteHandlerErrorProperties) => ({
  method,
  originalUrl,
  message,
});
