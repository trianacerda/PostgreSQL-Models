import { Router } from 'express';
import GetByIdService from '../services/GetByIdService.js';

export default Router().get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const getByIdPoke = await GetByIdService.getByIdPokemon(id);
    console.log('get', getByIdPoke);
    res.send(getByIdPoke);
  } catch (error) {
    next(error);
  }
});
