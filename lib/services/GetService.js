import { fetchPoke } from '../utils/fetch.js';

export default class GetService {
  static async getPokemon() {
    const getPoke = await fetchPoke();
    return getPoke;
  }
}
