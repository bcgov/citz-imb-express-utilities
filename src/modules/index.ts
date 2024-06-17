import { Application } from 'express';
import { default as healthRouter } from './health/router';
import { configRouter } from './config/router';

/**
 * Provides an endpoint to check that the express server is serving traffic.
 * @param {Application} app - Express app.
 * @method GET
 * @route /health
 */
export const healthModule = (app: Application) => {
  app.use('/health', healthRouter);
};

/**
 * Provides an endpoint to access configuration variables in the frontend.
 * DO NOT pass secrets and confidential data through this endpoint.
 * @param {Application} app - Express app.
 * @param {object} config - The JSON object to send to the frontend.
 * @method GET
 * @route /config
 */
export const configModule = (app: Application, config: object) => {
  app.use('/config', configRouter(config));
};
