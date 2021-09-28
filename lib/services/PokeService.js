// import PokeModel from '../models/PokeModel.js';
import { fetchPoke } from '../utils/fetch.js';

export default class PokeService {
  static async getPokemon() {
    const getPoke = await fetchPoke();
    // const savedPoke = await PokeModel.insert(getPoke);
    // console.log('getPOke', getPoke);
    return getPoke;
  }
}
