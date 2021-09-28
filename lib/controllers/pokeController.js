//get by id
//post?
//put?
//delete
import { Router } from 'express';
import PokeService from '../services/PokeService.js';

export default Router().get('/', async (req, res, next) => {
  try {
    const savedPokeData = await PokeService.savedPokemon();
    res.json(savedPokeData);
  } catch (error) {
    next(error);
  }
});
