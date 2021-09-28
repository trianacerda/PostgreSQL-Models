import GetModel from '../models/GetALLModel.js';
import { fetchPoke } from '../utils/fetch.js';

export default class GetService {
  static async getPokemon() {
    const getPoke = await fetchPoke();
    await GetModel.insert(getPoke);
    const getAllPoke = await GetModel.getALL();
    return getAllPoke;
  }
}
