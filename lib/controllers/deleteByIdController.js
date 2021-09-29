import { Router } from 'express';
import DeleteByIdService from '../services/DeleteByIdService.js';

export default Router().delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedByIdPoke = await DeleteByIdService.deleteByIdPokemon(id);
    res.send(deletedByIdPoke);
  } catch (error) {
    next(error);
  }
});
