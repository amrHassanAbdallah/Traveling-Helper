import { Router } from 'express';
import { InMemoryTimezonesStore } from '../../persistence/InMemeoryTimezonesStore';
import timezones from './routes/timezones';
import places from './routes/places';
import PostgresPlacesStore from '../../persistence/PostgresPlacesStore';
import bodyParser from 'body-parser';
import authMiddleware from '../middlewares/AuthMiddleware';
import cors from 'cors';

export default () => {
  const app = Router();
  const inMemoryTimezonesStore = new InMemoryTimezonesStore();
  const placesStore = new PostgresPlacesStore();
  app.use(bodyParser.json());
  app.use(cors());
  app.use(authMiddleware);
  timezones(app, inMemoryTimezonesStore);
  places(app, placesStore);
  return app;
};
