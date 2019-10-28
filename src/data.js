export const orderData = (dataPokemon) => {
  let resultOrder = dataPokemon.sort((a, b) => {

    if(a.name < b.name){
      return -1;
    }else if(a.name > b.name){
      return 1;
    }else{
      return 0;
    }

  });

  return resultOrder;
};
