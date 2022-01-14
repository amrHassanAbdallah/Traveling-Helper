import { GetTimezonesResponse } from './InMemeoryTimezonesStore';
import { GetPlacesResponse, Place } from './PostgresPlacesStore';
import { CreatePlacePayload } from '../api/v1/routes/places';

export interface TimezonesStore {
  GetTimezones(): Promise<GetTimezonesResponse>;
}

export interface PlacesStore {
  GetPlaces(): Promise<GetPlacesResponse>;

  StorePlace(payload: CreatePlacePayload): Promise<Place>;
}
