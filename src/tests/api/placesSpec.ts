import { app } from '../../server';
import supertest from 'supertest';
import { equal } from 'assert';
import { exec } from 'child_process';
import * as util from 'util';
import config from '../../config';
import LoggerInstance from '../../loaders/logger';

const excutor = util.promisify(exec);

const request = supertest.agent(app);

beforeAll((done) => {
  app.on('app-started', () => {
    done();
  });
}, 10000);
afterAll(async () => {
  LoggerInstance.debug(config.DB);
  const { stdout, stderr } = await excutor(' npx db-migrate reset');
  LoggerInstance.info(stdout);
  if (stderr) {
    LoggerInstance.error(stderr);
    process.exit(1);
  }
});

describe('Test places listing', () => {
  it('should return sucess when listing', async () => {
    await request.get('/api/v1/places').send().expect(200);
  });
  it('should return sucess when creating', async () => {
    await request
      .post('/api/v1/places')
      .send({
        country_id: 1,
        description: 'dsfsdfdsfdsf',
        name: 'dfsfdsfdsf',
        location: 'SRID=4326;POINT(32.610168 25.728158)',
      })
      .expect(201)
      .expect((response) => {
        equal(response.body.name, 'dfsfdsfdsf');
      });
  });
  it('should return 400 when passing invalid payload', async () => {
    await request
      .post('/api/v1/places')
      .send({
        country_id: 1,
        description: 'dsfsdfdsfdsf<script>alert("yo yo")</script>',
        name: 'dfsfdsfdsf',
        location: 'SRID=4326;POINT(32.610168 25.728158)',
      })
      .expect(400);
  });
});
