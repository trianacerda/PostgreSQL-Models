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

  it('should get the pokemon from api', () => {
    return request(app)
      .get('/api/v2/pokemon')
      .then((res) => {
        expect(res.body).toEqual({
          name: expect.any(String),
          url: expect.any(String),
        });
      });
  });

  it('should post api pokemon to SQL table-- pokemon', () => {
    return request(app)
      .post('/api/v2/pokemon')
      .send({
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          pokeName: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        });
      });
  });

  it('should get pokemon by id', async () => {
    await request(app).post('/api/v2/pokemon').send({
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    });
    return request(app)
      .get('/api/v2/pokemon/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          pokeName: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        });
      });
  });

  it('should update/patch pokemon by id', async () => {
    await request(app).post('/api/v2/pokemon').send({
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    });
    await request(app).patch('/api/v2/pokemon/1').send({
      pokeName: 'TRIANAasaur',
    });
    return request(app)
      .get('/api/v2/pokemon/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          pokeName: 'TRIANAasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        });
      });
  });

  it('should DELETE a pokemon by id', async () => {
    await request(app).post('/api/v2/pokemon').send({
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    });
    return request(app)
      .delete('/api/v2/pokemon/1')
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });
});
