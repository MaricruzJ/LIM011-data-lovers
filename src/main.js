import POKEMON from './data/pokemon/pokemon.js';
import { orderData } from './data.js';

const list = document.getElementById("list");

const order = orderData(POKEMON);

order.forEach(element => {

const divGeneral = document.createElement('div');

const divName = document.createElement('p');
divName.innerHTML = element.name;

const divImage = document.createElement('img');
divImage.setAttribute("src",element.img);

divGeneral.appendChild(divImage);
divGeneral.appendChild(divName);

list.appendChild(divGeneral);

});





