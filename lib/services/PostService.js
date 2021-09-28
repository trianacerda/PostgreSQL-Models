import { fetchPoke } from '../utils/fetch.js';
import PostModel from '../models/PostModel.js';

export default class PostService {
  static async postPokemon() {
    const postPoke = await fetchPoke();
    const savedPoke = await PostModel.post(postPoke);
    return savedPoke;
  }
}
