import POKEMON from './data/pokemon/pokemon.js';
import { orderData, searchData, search } from './data.js';

const list = document.getElementById('list');
const btnBack = document.getElementById('btn-back');
const menu = document.getElementById('menu');
const filtros = document.getElementById('filtros');
const home = document.getElementById('home');

menu.addEventListener('click', () => {  

  if (filtros.classList.contains('hidden')) {
    filtros.classList.remove('hidden');
    filtros.classList.add('show');
  } else {
    filtros.classList.remove('show');
    filtros.classList.add('hidden');
  }
})

btnBack.addEventListener('click', () => {
  document.getElementById('content-profile').style.display = 'none';
  home.style.display = 'flex';
  home.style.marginTop = '0px';
  home.style.padding = '16px';
});

const templateDetail = (pokemon) => {
  const template = ` 
                <div class='content-detail'>
                <div class='left'>
                  <div class='item-pokemon'>
                    <img src='${pokemon.img}' , alt='${pokemon.name}'>
                    <p>${pokemon.name}</p>
                  </div>
                </div>
                <div class='center'>
                  <div class='detail-pokemon'>
                    <p>Tipo: ${pokemon.type} </p>
                    <p>Candy: ${pokemon.candy}</p>
                    <p>Candy-Count: ${pokemon.candy_count}</p>
                    <p>Peso: ${pokemon.weight}</p>
                    <p>Talla: ${pokemon.height}</p>
                    <p id='multipliers'>Multiplicadores:</p>
                    <p>Debilidades: ${pokemon.weaknesses}</p>
                  </div>
                
                  <div id='evolution' class='div-evolution'>
                    <div id='preEvolution' class='evolution'>
                    </div>
                    <div id='nextEvolution' class='evolution'>
                    </div>
                </div>
              </div>
              </div>
              `;
  document.getElementById('profile').innerHTML = template;
};

const order = orderData(POKEMON);

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

  document.getElementById('content-profile').style.display = 'none';

  divGeneral.addEventListener('click', () => {
    document.getElementById('content-profile').style.display = 'block';
    filtros.classList.remove('show');
    filtros.classList.add('hidden');
    home.style.display = 'none';

    templateDetail(data);

    const nextEvolution = document.getElementById('nextEvolution');
    const preEvolution = document.getElementById('preEvolution');

    const templateEvolution = (elementHTML, evolution, texto) => {
      const title = document.createElement('p');
      title.innerHTML = texto;

      elementHTML.appendChild(title);

      evolution.forEach((next) => {
        const divEvolution = document.createElement('div');
        divEvolution.setAttribute('class', 'item-pokemon');
        const image = document.createElement('img');
        const name = document.createElement('p');

        divEvolution.appendChild(image);
        divEvolution.appendChild(name);

        name.innerHTML = next.name;

        const x = searchData(order, next.num);
        image.setAttribute('src', x.img);

        divEvolution.setAttribute('id', x.id);
        elementHTML.appendChild(divEvolution);

        document.getElementById(x.id).addEventListener('click', () => {
          templateDetail(x);
        });
      });
    };

    if (data.next_evolution !== undefined) {
      templateEvolution(nextEvolution, data.next_evolution, 'Siguiente Evolución');
    }

    if (data.prev_evolution !== undefined) {
      templateEvolution(preEvolution, data.prev_evolution, 'Anterior Evolución');
    }
  });
});

document.getElementById('search').addEventListener('click', () => {
  const textSarch = document.getElementById('search').value;
  const abc = search(order, textSarch.toUpperCase());
  console.log(abc);
});
