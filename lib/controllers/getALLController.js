//get by id
//post?
//put?
//delete
import { Router } from 'express';
import GetService from '../services/GetService.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const postPokeData = await GetService.getPokemon();
      // console.log('getData', getPokeData);
      res.send(postPokeData);
    } catch (error) {
      next(error);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const getPokeData = await GetService.getALL();
      // console.log('getPoke', getPokeData);
      res.json(getPokeData);
    } catch (error) {
      next(error);
    }
  });
