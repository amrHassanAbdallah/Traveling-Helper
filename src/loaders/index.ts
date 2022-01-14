import { Application } from 'express';
import expressLoader from './express';
import migrator from './migrator';

export class Loader {
  async init({ app }: { app: Application }) {
    await migrator();
    await expressLoader({ app });
  }
}
