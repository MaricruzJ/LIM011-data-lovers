import POKEMON from './data/pokemon/pokemon.js';
import { orderData } from './data.js';
import { search } from './data.js';

const list = document.getElementById("list");
const order = orderData(POKEMON);

order.forEach(data => {
  const divGeneral = document.createElement('div');
  divGeneral.classList.add('item-pokemon');

  document.getElementById("datos").style.display = 'none';

  divGeneral.addEventListener('click', () => {
    document.getElementById("datos").style.display = 'block';
    document.getElementById("root").style.display = 'none';

    document.getElementById("datos").innerHTML =
      `<div>
    <img src="${data.img}", alt="${data.name}">
    <p>Nombre: ${data.name}</p> 
    <p>Tipo: ${data.type} </p>
    <p>Candy: ${data.candy}</p>
    <p>Candy-Count: ${data.candy_count}</p>
    <p>Peso: ${data.weight}</p>
    <p>Talla: ${data.height}</p>
    <p id ="multipliers">Multiplicadores:</p>
    <p>Debilidades: ${data.weaknesses}</p>
    <div id="evolution">
      <div id="preEvolution">
      </div>
      <div id="nextEvolution">
      </div>
    </div>
  </div > `

    let nextEvolution = document.getElementById('nextEvolution');
    let preEvolution = document.getElementById('preEvolution');

    if (data.next_evolution != undefined) {

      let title = document.createElement('p');
      nextEvolution.innerHTML = 'Siguiente Evolución';

      preEvolution.appendChild(title);

      data.next_evolution.forEach(next => {

        let image = document.createElement('img');
        let name = document.createElement('p');

        name.innerHTML = next.name;

        let x = search(order, next.num);

        image.setAttribute("src", x.img)

        nextEvolution.appendChild(image);
        nextEvolution.appendChild(name);

      });

    };

    if (data.prev_evolution != undefined) {
      
      let title = document.createElement('p');
      title.innerHTML = 'Anterior Evolución';

      preEvolution.appendChild(title);

      data.prev_evolution.forEach(prev => {
        console.log(prev);


        let image = document.createElement('img');
        let name = document.createElement('p');


        name.innerHTML = prev.name;

        let x = search(order, prev.num);

        image.setAttribute("src", x.img);

        
        preEvolution.appendChild(image);
        preEvolution.appendChild(name);
      });

    };

  });

  const p = document.createElement('p');
  const divImage = document.createElement('img');

  p.innerHTML = data.name;
  divImage.setAttribute("src", data.img);

  divGeneral.appendChild(divImage);
  divGeneral.appendChild(p);

  list.appendChild(divGeneral);
});
