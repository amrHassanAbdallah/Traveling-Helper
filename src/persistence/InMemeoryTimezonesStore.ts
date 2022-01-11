import { TimezonesStore } from './types';

export interface LocationWithTimezone {
  location: string;
  timezoneName: string;
  timezoneAbbr: string;
  utcOffset: number;
}

export interface GetTimezonesResponse {
  data: LocationWithTimezone[];
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

export class InMemoryTimezonesStore implements TimezonesStore {
  GetTimezones(): Promise<GetTimezonesResponse> {
    return new Promise((resolve) => {
      resolve({ data: locations });
    });
  }
}
