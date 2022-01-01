import { Router, Request, Response } from 'express';
import { InMemoryTimezonesStore } from '../../persistence/InMemeoryTimezonesStore';
import timezones from './routes/timezones';

export default () => {
  const app = Router();
  const inMemoryTimezonesStore = new InMemoryTimezonesStore();
  timezones(app, inMemoryTimezonesStore);
  return app;
};
