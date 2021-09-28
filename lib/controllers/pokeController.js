//get by id
//post?
//put?
//delete
import { Router } from 'express';
import PokeService from '../services/PokeService.js';

export default Router().get('/', async (req, res, next) => {
  try {
    const getPokeData = await PokeService.getPokemon();
    res.json(getPokeData);
  } catch (error) {
    next(error);
  }
});
