
import POKEMON from './data/pokemon/pokemon.js';

export const orderData = (dataPokemon) => {
  const resultOrder = dataPokemon.sort((a, b) => {
    let abc = 0;
    if (a.name < b.name) abc = -1;
    if (a.name > b.name) abc = 1;
    return abc;
  });
  return resultOrder;
};

export const searchData = (dataBase, searchBy) => {
  console.log(searchBy);

  const a = dataBase.find((data) => data.num === searchBy);
  return a;
};

export const search = (dataBase, searchBy) => {
  console.log(searchBy);

  const a = dataBase.find((data) => data.name.toUpperCase() === searchBy);
  return a;
};

export const topDiez = (dataPokemon) => {

  dataPokemon.sort((a, b) => ((a.spawn_chance < b.spawn_chance) ? 1 : -1));
  const resultTopDiez = dataPokemon.slice(0, 10);

  return resultTopDiez;
};

export const filters = (data, filter, value) => {
    return data.filter((poke) => {
    const pokeValue = poke[filter];
    if(typeof pokeValue === 'object') return pokeValue.indexOf(value) > -1;
    console.log(pokeValue);
    return pokeValue; 
  });
};


export const getOption = (property) => {
  const elements = [];
  POKEMON.forEach((pokemon) => {
    pokemon[property].forEach((value) => {
      if (elements.indexOf(value) > -1) return;
      elements.push(value);
    });
  });
  return elements;
};
