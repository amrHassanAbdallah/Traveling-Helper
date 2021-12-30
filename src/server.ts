import express, { NextFunction, Request, Response } from 'express';
import { nextTick } from 'process';
import NotFoundURLError from './errors/NotFoundURLError';
import errorMiddleware from './middlewares/ErrorMiddleware';
const app = express();
const port = process.env.PORT || 8000;

interface LocationWithTimezone {
  location: string;
  timezoneName: string;
  timezoneAbbr: string;
  utcOffset: number;
}
const locations: LocationWithTimezone[] = [
  {
    location: 'Germany',
    timezoneName: 'Central European Time',
    timezoneAbbr: 'CET',
    utcOffset: 1,
  },
  {
    location: 'China',
    timezoneName: 'China Standard Time',
    timezoneAbbr: 'CST',
    utcOffset: 8,
  },
  {
    location: 'Argentina',
    timezoneName: 'Argentina Time',
    timezoneAbbr: 'ART',
    utcOffset: -3,
  },
  {
    location: 'Japan',
    timezoneName: 'Japan Standard Time',
    timezoneAbbr: 'JST',
    utcOffset: 9,
  },
];
app.get(
  '/api/v1/timezones',
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ data: locations });
    next();
  }
);
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new NotFoundURLError();
  next(err);
});
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Application is working on port${port}`);
});

export { app };
