export const orderData = (dataPokemon, orderBy) => {
  let resultOrder = [];

  if (orderBy === '1') {
    resultOrder = dataPokemon.sort((a, b) => {
      let abc = 0;
      if (a.weaknesses.length < b.weaknesses.length) abc = -1;
      if (a.weaknesses.length > b.weaknesses.length) abc = 1;
      return abc;
    });
  } else if (orderBy === '2') {
    resultOrder = dataPokemon.sort((a, b) => {
      let abc = 0;
      if (a.weaknesses.length > b.weaknesses.length) abc = -1;
      if (a.weaknesses.length < b.weaknesses.length) abc = 1;
      return abc;
    });
  } else {
    resultOrder = dataPokemon.sort((a, b) => {
      let abc = 0;
      if (a.name < b.name) abc = -1;
      if (a.name > b.name) abc = 1;
      return abc;
    });
  }
  return resultOrder;
};

export const searchPokemon = (dataBase, searchBy) => {
  const a = dataBase.find((data) => data.num === searchBy);
  return a;
};

export const search = (dataBase, searchBy) => {
  let x = [];
  dataBase.forEach((element) => {
    if (element.name.toUpperCase().indexOf(searchBy) > -1) {
      x.push(element);
    }
  });
  return x;
};

export const topDiez = (dataPokemon) => {
  dataPokemon.sort((a, b) => ((a.spawn_chance < b.spawn_chance) ? 1 : -1));
  const resultTopDiez = dataPokemon.slice(0, 10);
  return resultTopDiez;
};

export const filters = (data, filter, value) => {
  return data.filter((poke) => {
    const pokeValue = poke[filter];
    if (typeof pokeValue === 'object') return pokeValue.indexOf(value) > -1;
    return pokeValue;
  });
};

export const getOption = (POKEMON, property) => {
  const elements = [];
  POKEMON.forEach((pokemon) => {
    pokemon[property].forEach((value) => {
      if (elements.indexOf(value) > -1) return;
      elements.push(value);
    });
  });
  return elements;
};

export const candies = (data, rango) => {
  if (rango === '1') {
    return data.filter((element) => {
      if (element.candy_count > 0 && element.candy_count < 26) {
        return element;
      }
    });
  }
  if (rango === '2') {
    return data.filter((element) => {
      if (element.candy_count > 25 && element.candy_count < 51) {
        return element;
      }
    });
  }
  if (rango === '3') {
    return data.filter((element) => {
      if (element.candy_count > 50 && element.candy_count < 101) {
        return element;
      }
    });
  }
  if (rango === '4') {
    return data.filter((element) => {
      if (element.candy_count > 100) {
        return element;
      }
    });
  }
};
