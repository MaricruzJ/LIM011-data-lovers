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
  const a = dataBase.find((data) => data.num === searchBy);
  return a;
};

export const search = (dataBase, searchBy) => {
  const a = dataBase.find((data) => data.name.toUpperCase() === searchBy);
  return a;
};
