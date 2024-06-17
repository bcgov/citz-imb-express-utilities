import express from 'express';
const router = express.Router();

import { getConfig } from './controller';

/**
 * Provide configuration variables to the frontend.
 * @method GET
 * @route /config
 */
export const configRouter = (config: object) => {
  router.route('/').get(getConfig(config));
  return router;
};
