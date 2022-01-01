import express, { NextFunction, Request, Response } from 'express';
import NotFoundURLError from './errors/NotFoundURLError';
import errorMiddleware from './middlewares/ErrorMiddleware';
import config from './config';
import { Loader } from './loaders';

const app = express();

async function startServer() {
  await new Loader().init({ app });
  app.listen(config.port, () => {
    console.log(`Application is working on port${config.port}`);
  });
}
startServer();

export { app };
