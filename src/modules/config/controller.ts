import type { Request, Response } from 'express';
import { errorWrapper } from '../../errorWrapper';

/**
 * Provide configuration variables to the frontend.
 * @method GET
 * @route /config
 */
export const getConfig = (config: object) => {
  return errorWrapper(async (req: Request, res: Response) => {
    res.json(config);
  });
};
