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
    
    let datosEvolucion="";
     if (data.next_evolution !== undefined) {
       datosEvolucion= data.next_evolution
 datosEvolucion.forEach (object => {
 
  console.log(datosEvolucion.values(object));
  console.log(datosEvolucion.values(object));
 
 })
 
 }
    };

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
    <p>Evolución:

    <P></P>
    </p>
  </div > `
  

  const p = document.createElement('p');
  const divImage = document.createElement('img');

  p.innerHTML = data.name;
  divImage.setAttribute("src", data.img);

  divGeneral.appendChild(divImage);
  divGeneral.appendChild(p);

  list.appendChild(divGeneral);
});
