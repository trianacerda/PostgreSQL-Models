import { Router } from 'express';
import GetByIdService from '../services/GetByIdService.js';

export default Router().get('/:id', async (req, res, next) => {
  try {
    const getByIdPoke = await GetByIdService.getByIdPokemon(req.params.id);
    res.send(getByIdPoke);
  } catch (error) {
    next(error);
  }
});
