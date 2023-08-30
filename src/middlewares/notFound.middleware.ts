import { Request, Response } from 'express';
import { logger } from '../utils/logger';

export const notFound = (req: Request, res: Response) => {
  res.status(404).send('Not found');
  logger.error(
    `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );
};
