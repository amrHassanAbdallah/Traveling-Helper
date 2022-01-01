import { Application } from 'express';
import expressLoader from './express';

export class Loader {
  async init({ app }: { app: Application }) {
    await expressLoader({ app });
  }
}
