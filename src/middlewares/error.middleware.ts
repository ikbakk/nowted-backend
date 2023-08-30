import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';

export const errorHandle = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.name === 'ValidationError') {
    res.status(400).send('Bad Request');
    logger.error(`Error: ${err.message} \n ${err.stack}`);
  } else {
    res.status(500).send('Internal server error');
    logger.error(`Error: ${err.message} \n ${err.stack}`);
  }
  next();
};
