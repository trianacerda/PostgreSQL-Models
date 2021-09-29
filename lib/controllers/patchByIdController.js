import { Router } from 'express';
import PatchByIdService from '../services/PatchByIdService';

export default Router().patch('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const pokeName = req.body.pokeName;
    const patchPokeData = await PatchByIdService.patchByIdPokemon(id, pokeName);
    res.send(patchPokeData);
  } catch (error) {
    next(error);
  }
});
