import { Pool, PoolClient } from 'pg';
import config from '../config';

class Postgres_client {
  static connection: Pool;

  static async connect() {
    if (this.connection) {
      return this.connection;
    } else {
      this.connection = new Pool({
        host: config.DB.URL,
        user: config.DB.USERNAME,
        password: config.DB.PASSWORD,
        database: config.DB.NAME,
        min: 1,
        max: 10,
        idleTimeoutMillis: 5000,
      });
    }
    return await this.connection.connect();
  }
}
