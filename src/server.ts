import express from 'express';
import config from './config';
import { Loader } from './loaders';
import LoggerInstance from './loaders/logger';

const app = express();

async function startServer() {
  await new Loader().init({ app });
  app.listen(config.port, () => {
    LoggerInstance.info(`Application is working on port${config.port}`);
    app.emit('app-started');
  });
}

startServer();

export { app };
