import { Router } from 'express';
import PatchByIdService from '../services/PatchById.js';

export default Router().patch('/:id', async (req, res, next) => {
  try {
    const patchPokeData = await PatchByIdService.patchPokemon();
    res.send(patchPokeData);
  } catch (error) {
    next(error);
  }
});
