import { PlacesStore } from './types';
import PostgresClient from '../loaders/PostgresClient';

export interface Place {
  id: number;
  country_id: number;
  description: string;
  name: string;
  location: string;
}

export interface GetPlacesResponse {
  data: Place[];
}

export default class PostgresPlacesStore implements PlacesStore {
  async GetPlaces(): Promise<GetPlacesResponse> {
    const conn = await PostgresClient.connect();
    const query = 'select * from places';
    const result = await conn.query(query);
    return { data: result.rows };
  }

  async StorePlace(payload: Place): Promise<Place> {
    const conn = await PostgresClient.connect();
    const query =
      'insert into places (country_id, name, description, location) values ($1,$2,$3,$4) RETURNING *';
    const result = await conn.query(query, [
      payload.country_id,
      payload.name,
      payload.description,
      payload.location,
    ]);
    return result.rows[0];
  }
}
