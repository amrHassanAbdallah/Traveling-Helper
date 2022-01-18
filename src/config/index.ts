import dotenv from 'dotenv';
import LoggerInstance from '../loaders/logger';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
let envFilePath = '.env';
if (process.env.NODE_ENV == 'testing') {
  envFilePath = '.env_testing';
}
if (process.env.NODE_ENV != 'production') {
  const envFound = dotenv.config({ path: envFilePath });
  if (envFound.error) {
    throw new Error('env file not found');
  }
}

LoggerInstance.debug(process.env.NODE_ENV);
LoggerInstance.debug(process.env.POSTGRES_DB);
LoggerInstance.debug(process.env.DB_PORT);
LoggerInstance.debug(envFilePath);

export default {
  port: process.env.PORT || 8000,
  DB: {
    URL: process.env.POSTGRES_HOST,
    USERNAME: process.env.POSTGRES_USERNAME,
    PASSWORD: process.env.POSTGRES_PASSWORD,
    NAME: process.env.POSTGRES_DB,
    PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  },
  application_name: 'travling-helper',
};
