import { Router, Request, Response } from 'express';
import { TimezonesStore } from '../../../persistence/types';

const route = Router();

export default (app: Router, timezoneStore: TimezonesStore) => {
  app.use('/timezones', route);
  route.get('/', async (req: Request, res: Response) => {
    const data = await timezoneStore.GetTimezones();
    return res.status(200).json(data);
  });
};
