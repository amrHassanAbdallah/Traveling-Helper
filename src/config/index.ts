import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
let envFilePath = '.env';
if (process.env.NODE_ENV == 'testing') {
  envFilePath = '.env_testing';
}

const envFound = dotenv.config({ path: envFilePath });
if (envFound.error) {
  throw new Error('env file not found');
}
console.log(process.env.NODE_ENV);
export default {
  port: process.env.PORT || 8000,
  DB: {
    URL: process.env.POSTGRES_HOST,
    USERNAME: process.env.POSTGRES_USERNAME,
    PASSWORD: process.env.POSTGRES_PASSWORD,
    NAME: process.env.POSTGRES_DB,
  },
};
