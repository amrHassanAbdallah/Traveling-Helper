import { Pool } from 'pg';
import config from '../config';
import LoggerInstance from './logger';

export default class PostgresClient {
  static connection: Pool;

  static async connect() {
    LoggerInstance.debug(config.DB);
    if (this.connection) {
      return this.connection;
    } else {
      this.connection = new Pool({
        host: config.DB.URL,
        user: config.DB.USERNAME,
        password: config.DB.PASSWORD,
        database: config.DB.NAME,
        port: config.DB.PORT,
        min: 1,
        max: 10,
        idleTimeoutMillis: 5000,
      });
    }
    return this.connection.connect();
  }
}
