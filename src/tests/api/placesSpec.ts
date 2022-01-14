import { app } from '../../server';
import supertest from 'supertest';
import { equal } from 'assert';

const request = supertest.agent(app);

beforeAll((done) => {
  app.on('app-started', () => {
    done();
  });
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
});
