import { app } from '../../server';
import supertest from 'supertest';

const request = supertest(app);

describe('Test Timezones listing', () => {
  it('should return sucess when listing', async () => {
    await request
      .get('/api/v1/timezones')
      .send()
      .expect(200)
      .expect((response) => {
        expect(response.body.data[0].location).toEqual('Germany');
      });
  });
});
