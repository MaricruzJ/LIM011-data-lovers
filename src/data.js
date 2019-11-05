
export const orderData = (dataPokemon) => {
  let resultOrder = dataPokemon.sort((a,b)=>{
    return (a.name<b.name) ? -1 : 1
  });
  return resultOrder
};
