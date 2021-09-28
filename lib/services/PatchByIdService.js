import PatchByIdModel from '../models/PatchByIdModel.js';

export default class PatchByIdService {
  static async patchByIdPokemon(id, pokeName) {
    const savedPoke = await PatchByIdModel.byId(id, pokeName);
    return savedPoke;
  }
}
