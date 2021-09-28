import { fetchPoke } from '../utils/fetch.js';
import DeleteByIdModel from '../models/DeleteByIdModel.js';

export default class DeleteByIdService {
  static async deleteByIdPokemon() {
    const getPoke = await fetchPoke();
    const savedPoke = await DeleteByIdModel.deleteById(getPoke);
    return savedPoke;
  }
}
