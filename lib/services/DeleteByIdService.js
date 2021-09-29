import DeleteByIdModel from '../models/DeleteByIdModel.js';

export default class DeleteByIdService {
  static async deleteByIdPokemon(id) {
    const savedPoke = await DeleteByIdModel.deleteById(id);
    return savedPoke;
  }
}
