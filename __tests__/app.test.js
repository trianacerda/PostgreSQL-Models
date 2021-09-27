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
      .get('/')
      .then((res) => {
        console.log('res.body', res.body);
        expect(res.body).toEqual({
          id: expect.any(String),
          pokeName: expect.any(String),
          url: expect.any(String),
        });
      });
  });
});
