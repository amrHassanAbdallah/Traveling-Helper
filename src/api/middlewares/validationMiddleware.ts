import HttpError from '../../errors/HttpError';
import { NextFunction, Request, Response } from 'express';
import LoggerInstance from '../../loaders/logger';
import { expressValidator } from '../v1/validators/validator';

function validationMiddleware(req: Request, res: Response, next: NextFunction) {
  const errors = expressValidator(req);
  if (errors.length) {
    return res.status(400).json({ errors });
  }
  next();
}

export default validationMiddleware;
