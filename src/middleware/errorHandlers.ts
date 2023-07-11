import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line max-len
export const notFoundHandler = (err: any, _: Request, res: Response, next: NextFunction) => {
  if (!err.message.includes('not found')) {
    next(err);
  }
  res.status(404).send(err.message);
};

export const errorHandler = (err: any, _: Request, res: Response, next: NextFunction) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  res.status(status).send(message);
};
