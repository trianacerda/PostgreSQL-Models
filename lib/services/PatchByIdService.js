import PatchByIdModel from '../models/PatchByIdModel.js';

export default class PatchByIdService {
  static async patchByIdPokemon(id) {
    const savedPoke = await PatchByIdModel.byId(id);
    return savedPoke;
  }
}
