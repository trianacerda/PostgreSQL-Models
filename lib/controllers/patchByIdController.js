import { Router } from 'express';
import PatchByIdService from '../services/PatchByIdService';

export default Router().patch('/:id', async (req, res, next) => {
  try {
    const patchPokeData = await PatchByIdService.patchByIdPokemon(
      req.params.id,
      req.body
    );
    res.send(patchPokeData);
  } catch (error) {
    next(error);
  }
});
