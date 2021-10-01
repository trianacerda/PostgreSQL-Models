import GetModel from '../models/GetALLModel.js';
import { fetchPoke } from '../utils/fetch.js';

export default class GetService {
  static async getPokemon() {
    const getPoke = await fetchPoke();
    // console.log('fetch', getPoke);
    await getPoke.map(({ name, url }) => {
      console.log('item', name, url);
      return GetModel.insert(name, url);
    });
    const getAllPoke = await GetModel.getALL();
    // console.log('MODEL', getAllPoke);
    return getAllPoke;
  }
  static async getALL() {
    const getAllPoke = await GetModel.getALL();
    // console.log('MODEL', getAllPoke);
    return getAllPoke;
  }
}
