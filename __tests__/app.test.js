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

  it('should POST api pokemon to SQL table-- pokemon', () => {
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

  it.only('should GET ALL pokemon from SQL table', async () => {
    await request(app).post('/api/v2/pokemon').send();
    return request(app)
      .get('/api/v2/pokemon')
      .then((res) => {
        // console.log('!!!!!', res.body);
        expect(res.body).toEqual(expect.any(Array));
        expect(res.body.length).toEqual(20);
      });
  });

  it('should GET pokemon by ID', async () => {
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

  it('should PATCH pokemon by ID', async () => {
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

  it('should DELETE a pokemon by ID', async () => {
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
