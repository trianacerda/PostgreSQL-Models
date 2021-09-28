//get by id
//post?
//put?
//delete
import { Router } from 'express';
import GetService from '../services/GetService.js';

export default Router().get('/', async (req, res, next) => {
  try {
    const getPokeData = await GetService.getPokemon();
    res.json(getPokeData);
  } catch (error) {
    next(error);
  }
});
