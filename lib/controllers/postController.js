import { Router } from 'express';
import PostService from '../services/PostService.js';

export default Router().post('/', async (req, res, next) => {
  try {
    const postPokeData = await PostService.postPokemon(req.body);
    // console.log('getData', getPokeData);
    res.send(postPokeData);
  } catch (error) {
    next(error);
  }
});
