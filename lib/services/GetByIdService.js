import GetByIdModel from '../models/GetByIdModel.js';

export default class GetByIdService {
  static async getByIdPokemon(id) {
    const savedPoke = await GetByIdModel.byId(id);
    return savedPoke;
  }
}
