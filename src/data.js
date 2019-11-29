export const orderData = (dataPokemon, orderBy) => {
  let resultSort = [];

  if (orderBy === 'strong') {
    resultSort = dataPokemon.sort((a, b) => {
      let result = 0;
      if (a.weaknesses.length < b.weaknesses.length) result = -1;
      if (a.weaknesses.length > b.weaknesses.length) result = 1;
      return result;
    });
  } else if (orderBy === 'weak') {
    resultSort = dataPokemon.sort((a, b) => {
      let result = 0;
      if (a.weaknesses.length > b.weaknesses.length) result = -1;
      if (a.weaknesses.length < b.weaknesses.length) result = 1;
      return result;
    });
  } else {
    resultSort = dataPokemon.sort((a, b) => {
      let result = 0;
      if (a.name < b.name) result = -1;
      if (a.name > b.name) result = 1;
      return result;
    });
  }
  return resultSort;
};

export const searchPokemon = (dataBase, searchBy) => {
  const dataFound = dataBase.find((data) => data.num === searchBy);
  return dataFound;
};

export const searchGroup = (dataBase, searchBy) => {
  const group = [];
  dataBase.forEach((element) => {
    if (element.name.toUpperCase().indexOf(searchBy) > -1) {
      group.push(element);
    }
  });
  return group;
};

export const topDiez = (dataPokemon) => {
  dataPokemon.sort((a, b) => ((a.spawn_chance < b.spawn_chance) ? 1 : -1));
  return dataPokemon.slice(0, 10);
};

export const filters = (data, filterBy, value) => {
  const dataFound = data.filter((pokemon) => pokemon[filterBy].indexOf(value) > -1);
  return dataFound;
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
  let dataInRange;
  switch (rango) {
    case '1':
      dataInRange = data.filter((element) => element.candy_count > 0 && element.candy_count < 26);
      break;
    case '2':
      dataInRange = data.filter((element) => element.candy_count > 25 && element.candy_count < 51);
      break;
    case '3':
      dataInRange = data.filter((element) => element.candy_count > 50 && element.candy_count < 101);
      break;
    case '4':
      dataInRange = data.filter((element) => element.candy_count > 100);
      break;
    default:
      dataInRange = 'Fuera de rango';
  }
  return dataInRange;
};
