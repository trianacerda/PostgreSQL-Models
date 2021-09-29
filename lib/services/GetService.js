import GetModel from '../models/GetALLModel.js';
import { fetchPoke } from '../utils/fetch.js';

export default class GetService {
  static async getPokemon() {
    const getPoke = await fetchPoke();
    await getPoke.map((item) => {
      GetModel.insert(item);
    });
    const getAllPoke = await GetModel.getALL();
    console.log('getALLPoke');
    return getAllPoke;
  }
}
