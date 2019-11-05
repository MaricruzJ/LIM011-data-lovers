import POKEMON from './data/pokemon/pokemon.js';
import { orderData } from './data.js';

const list = document.getElementById("list");
const order = orderData(POKEMON);
const datos = document.getElementById("datos");

const divGeneral = document.createElement('div');
const p = document.createElement('p');
const divImage = document.createElement('img');


order.forEach(data => {
  const divGeneral = document.createElement('div');
  divGeneral.classList.add('item-pokemon');


  document.getElementById("datos").style.display = 'none';

  divGeneral.onclick = (event) => {
    document.getElementById("datos").style.display = 'block';
    document.getElementById("root").style.display = 'none';
    if (data.next_evolution !== undefined) {
      data.next_evolution.forEach(x => {
        const nextEvolution = x.name;
        console.log(nextEvolution);
      });
      console.log(nextEvolution);
      
    }

    document.getElementById("datos").innerHTML =
    `<div>
    <img src="${data.img}", alt="${data.name}">
    <p>Nombre: ${data.name}</p> 
    <p>Tipo: ${data.type} </p>
    <p>Candy: ${data.candy}</p>
    <p>Candy-Count: ${data.candy_count}</p>
    <p>Peso: ${data.weight}</p>
    <p>Talla: ${data.height}</p>
    <p>Multiplicadores: ${data.multiplier}</p>
    <p>Debilidades: ${data.weaknesses}</p>
  </div > `
  
  }

  

  const p = document.createElement('p');
  const divImage = document.createElement('img');

  p.innerHTML = data.name;
  divImage.setAttribute("src", data.img);

  divGeneral.appendChild(divImage);
  divGeneral.appendChild(p);

  list.appendChild(divGeneral);
});


/* order.forEach(data => {
  const divGeneral = document.createElement('div');
  divGeneral.classList.replace('item-pokemon', 'showDatos');

  divGeneral.onclick = () => { }

  const p = document.createElement('p');
  const divImage = document.createElement('img');

  divImage.setAttribute("src", data.img);
  p.innerHTML = data.name;
  p.innerHTML = data.type;
  p.innerHTML = data.height;
  p.innerHTML = data.weight;
  p.innerHTML = data.candy;
  p.innerHTML = data.multipliers;
  p.innerHTML = data.weaknesses;
  p.innerHTML = data.next_evolution;

  divGeneral.appendChild(divImage);
  divGeneral.appendChild(p);

  datos.appendChild(divGeneral);
}); */
