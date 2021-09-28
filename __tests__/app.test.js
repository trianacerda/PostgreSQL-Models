import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('gets pokemon from api', () => {
    return request(app)
      .get('/api/v2/pokemon')
      .then((res) => {
        console.log('res.body', res.body);
        expect(res.body).toEqual({
          // id: expect.any(String),
          name: expect.any(String),
          url: expect.any(String),
        });
      });
  });
});
