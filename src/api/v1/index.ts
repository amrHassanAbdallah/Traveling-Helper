import { Router } from 'express';
import { InMemoryTimezonesStore } from '../../persistence/InMemeoryTimezonesStore';
import timezones from './routes/timezones';
import places from './routes/places';
import PostgresPlacesStore from '../../persistence/PostgresPlacesStore';
import bodyParser from 'body-parser';

export default () => {
  const app = Router();
  const inMemoryTimezonesStore = new InMemoryTimezonesStore();
  const placesStore = new PostgresPlacesStore();
  app.use(bodyParser.json());
  timezones(app, inMemoryTimezonesStore);
  places(app, placesStore);
  return app;
};
