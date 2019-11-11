import POKEMON from './data/pokemon/pokemon.js';
import { orderData, searchData } from './data.js';

const list = document.getElementById('list');
const btnBack = document.getElementById('btn-back');

btnBack.addEventListener('click', () => {
  document.getElementById('profile').style.display = 'none';
  document.getElementById('home').style.display = 'flex';
  document.getElementById('header').style.display = 'block';
  document.getElementById('home').style.marginTop = '0px';
  document.getElementById('home').style.padding = '16px';
  document.getElementById('root').style.paddingTop = '128px';
});

const order = orderData(POKEMON);

document.getElementById('search').addEventListener('keyup', () => {
  const textSarch = document.getElementById('search').value;
  let abc = searchData(order, textSarch.toUpperCase());
  console.log(abc);

  
  /* for (let i = 0; i < order.length; i++) {
    if (textSarch.indexOf(order[i])> -1) {
        console.log("Object with index number "+i+" contains "+textSarch); 
    }
    return; */

  /* const divGeneral = document.createElement('div');
  divGeneral.classList.add('item-pokemon');

  const p = document.createElement('p');
  const divImage = document.createElement('img');

  p.innerHTML = abc.name;
  divImage.setAttribute('src', abc.img);

  divGeneral.appendChild(divImage);
  divGeneral.appendChild(p);

  list.appendChild(divGeneral); */
});

order.forEach((data) => {
  const divGeneral = document.createElement('div');
  divGeneral.classList.add('item-pokemon');

  const p = document.createElement('p');
  const divImage = document.createElement('img');

  p.innerHTML = data.name;
  divImage.setAttribute('src', data.img);

  divGeneral.appendChild(divImage);
  divGeneral.appendChild(p);

  list.appendChild(divGeneral);

  document.getElementById('profile').style.display = 'none';

  divGeneral.addEventListener('click', () => {
    document.getElementById('header').style.display = 'none';
    document.getElementById('root').style.paddingTop = '0px';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('header').style.display = 'none';

    const template = `<div class = 'item-pokemon'>
      <img src='${data.img}', alt='${data.name}'>
      <p>${data.name}</p> 
      </div>
      <div class = 'detail-pokemon'>
      <p>Tipo: ${data.type} </p>
      <p>Candy: ${data.candy}</p>
      <p>Candy-Count: ${data.candy_count}</p>
      <p>Peso: ${data.weight}</p>
      <p>Talla: ${data.height}</p>
      <p id ='multipliers'>Multiplicadores:</p>
      <p>Debilidades: ${data.weaknesses}</p>
      </div>
      <div id='evolution'>
        <div id='preEvolution'>
        </div>
        <div id='nextEvolution'>
        </div>
      </div> `;

    document.getElementById('profile').innerHTML = template;

    const nextEvolution = document.getElementById('nextEvolution');
    const preEvolution = document.getElementById('preEvolution');

    if (data.next_evolution !== undefined) {
      const title = document.createElement('p');
      nextEvolution.innerHTML = 'Siguiente Evolución';

      nextEvolution.appendChild(title);

      data.next_evolution.forEach((next) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'item-pokemon');
        const image = document.createElement('img');
        const name = document.createElement('p');

        div.appendChild(image);
        div.appendChild(name);

        name.innerHTML = next.name;

        const x = searchData(order, next.num);

        image.setAttribute('src', x.img);

        div.setAttribute('id', x.id);
        nextEvolution.appendChild(div);
      });
    }

    if (data.prev_evolution !== undefined) {
      const title = document.createElement('p');
      title.innerHTML = 'Anterior Evolución';

      preEvolution.appendChild(title);

      data.prev_evolution.forEach((prev) => {

        const div = document.createElement('div');
        div.setAttribute('class', 'item-pokemon');
        const image = document.createElement('img');
        const name = document.createElement('p');

        div.appendChild(image);
        div.appendChild(name);

        name.innerHTML = prev.name;

        const x = searchData(order, prev.num);

        image.setAttribute('src', x.img);
        div.setAttribute('id', x.id);

        preEvolution.appendChild(div);
      });
    }
  });
});
