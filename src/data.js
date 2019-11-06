
export const orderData = (dataPokemon) => {
  let resultOrder = dataPokemon.sort((a, b) => {
    return (a.name < b.name) ? -1 : 1
  });
  return resultOrder
};

export const search = (dataBase, searchBy) => {
 return dataBase.find(data => data.num === searchBy);
};
