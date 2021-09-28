import { Router } from 'express';
import PatchService from '../services/PatchById.js';

export default Router().patch('/:id', async (req, res, next) => {
  try {
    const patchPokeData = await PatchService.patchPokemon();
    res.send(patchPokeData);
  } catch (error) {
    next(error);
  }
});
