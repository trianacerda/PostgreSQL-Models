import fetch from 'node-fetch';

const rootPokeURL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPoke = async () => {
  const pokeGetData = await fetch(rootPokeURL);
  console.log('!!!!!pokeGetData', pokeGetData);
  const allJSONpoke = await pokeGetData.json();
  return allJSONpoke;
};
