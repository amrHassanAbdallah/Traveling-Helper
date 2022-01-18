import { Router, Request, Response } from 'express';
import { PlacesStore, TimezonesStore } from '../../../persistence/types';
import { createPlaceValidator } from '../validators/createPlace';
import { expressValidator } from '../validators/validator';
import validationMiddleware from '../../middlewares/validationMiddleware';

const route = Router();

export interface CreatePlacePayload {
  country_id: number;
  description: string;
  name: string;
  location: string;
}

export default (app: Router, placesStore: PlacesStore) => {
  app.use('/places', route);
  route.get('/', async (req: Request, res: Response) => {
    const data = await placesStore.GetPlaces();
    return res.status(200).json(data);
  });
  route.post(
    '/',
    createPlaceValidator(),
    validationMiddleware,
    async (req: Request, res: Response) => {
      const data = await placesStore.StorePlace({
        country_id: req.body.country_id,
        description: req.body.description,
        location: req.body.location,
        name: req.body.name,
      });
      return res.status(201).json(data);
    }
  );
};
