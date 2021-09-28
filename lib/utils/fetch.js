import fetch from 'node-fetch';

const rootPokeURL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPoke = async () => {
  const pokeGetData = await fetch(rootPokeURL);
  const allJSONpoke = await pokeGetData.json();
  console.log('inFETCH', allJSONpoke.results[0]);
  return {
    name: allJSONpoke.results[0].name,
    url: allJSONpoke.results[0].url,
  };
};
