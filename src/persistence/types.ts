import { GetTimezonesResponse } from './InMemeoryTimezonesStore';

export default interface TimezonesStore {
  GetTimezones(): Promise<GetTimezonesResponse>;
}
