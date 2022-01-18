import { Router } from 'express';
import { InMemoryTimezonesStore } from '../../persistence/InMemeoryTimezonesStore';
import timezones from './routes/timezones';
import places from './routes/places';
import PostgresPlacesStore from '../../persistence/PostgresPlacesStore';
import bodyParser from 'body-parser';
import audit from 'express-requests-logger';
import LoggerInstance from '../../loaders/logger';

export default () => {
  const app = Router();
  const inMemoryTimezonesStore = new InMemoryTimezonesStore();
  const placesStore = new PostgresPlacesStore();
  app.use(bodyParser.json());
  app.use(
    audit({
      logger: LoggerInstance,
      request: {
        maskBody: ['password'],
        maxBodyLength: 60,
      },
      response: {
        maxBodyLength: 60,
      },
    })
  );
  timezones(app, inMemoryTimezonesStore);
  places(app, placesStore);
  return app;
};
