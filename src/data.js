
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

export const topDiez = (dataPokemon)=>{
dataPokemon.sort((a,b)=> ((a.spawn_chance > b.spawn_chance)? -1: 1));
const resultTopDiez = dataPokemon.slice(0,10);
console.log(resultTopDiez);
return resultTopDiez

};


