import POKEMON from './data/pokemon/pokemon.js';
import { orderData, searchPokemon, search, filters, getOption, topDiez, candies } from './data.js';

const list = document.getElementById('list');
const profile = document.getElementById('profile');
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
});

btnBack.addEventListener('click', () => {
  document.getElementById('content-profile').style.display = 'none';
  home.style.display = 'flex';
  home.style.marginTop = '0px';
  home.style.padding = '16px';
});

// datos ordenados de forma ascendente.
const sortData = orderData(POKEMON);


const templateDetail = (pokemon) => {
  const templateTwo = `
                <div class='content-detail'>
                <div class='left'>
                  <p> Pokemon Seleccionado</p>
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
                </div>
                <div class='rigth'>
                  <div id='evolution'>
                    <div id='preEvolution' class=''>
                    </div>
                    <div id='nextEvolution' class=''>
                    </div>
                  </div>
                </div>
              </div>`;
  profile.innerHTML = templateTwo;
};

const general = (xy) => {
  console.log('funcion', xy);

  xy.forEach((data) => {

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

      if (data.next_evolution !== undefined) {
        const title = document.createElement('p');
        title.innerHTML = 'Next Evolución';

        nextEvolution.appendChild(title);

        data.next_evolution.forEach((next) => {
          const divEvolution = document.createElement('div');
          divEvolution.setAttribute('class', 'item-pokemon');
          const image = document.createElement('img');
          const name = document.createElement('p');

          divEvolution.appendChild(image);
          divEvolution.appendChild(name);

          name.innerHTML = next.name;

          const y = searchPokemon(sortData, next.num);
          image.setAttribute('src', y.img);

          nextEvolution.appendChild(divEvolution);
        });
      }

      if (data.prev_evolution !== undefined) {
        const title = document.createElement('p');
        title.innerHTML = 'Pre Evolución';

        preEvolution.appendChild(title);

        data.prev_evolution.forEach((next) => {
          const divEvolution = document.createElement('div');
          divEvolution.setAttribute('class', 'item-pokemon');
          const image = document.createElement('img');
          const name = document.createElement('p');

          divEvolution.appendChild(image);
          divEvolution.appendChild(name);

          name.innerHTML = next.name;

          const y = searchPokemon(x, next.num);
          image.setAttribute('src', y.img);

          preEvolution.appendChild(divEvolution);
        });
      }
    });
  });
};

general(sortData);

const topTen = document.getElementById('topTen');

const mostrarTopTen = topDiez(sortData);

topTen.addEventListener('click', () => {
  list.innerHTML = '';
  general(mostrarTopTen);
});

let showFiltersOrder = filters(POKEMON, 'filter', 'value');
const selectTypeFilters = document.querySelector('#id_type');

getOption(POKEMON, 'type').map((element) => {
  const option = document.createElement('option');
  option.setAttribute('value', element);
  option.innerText = element;

  selectTypeFilters.appendChild(option);

  selectTypeFilters.addEventListener('change', (event) => {
    showFiltersOrder = filters(POKEMON, 'type', event.target.value);
    list.innerHTML = '';
    general(showFiltersOrder);
  });
});

const selectWeaknessesFilters = document.querySelector('#id_weaknesses');
getOption(sortData, 'weaknesses').map((element) => {
  const option = document.createElement('option');
  option.setAttribute('value', element);
  option.innerText = element;

  selectWeaknessesFilters.appendChild(option);

  selectWeaknessesFilters.addEventListener('change', (event) => {
    showFiltersOrder = filters(sortData, 'weaknesses', event.target.value);
    list.innerHTML = '';
    general(showFiltersOrder);
  });
});

const selectSort = document.querySelector('#selectSort');
selectSort.addEventListener('change', () => {
  list.innerHTML = '';
  const sortBy = orderData(sortData, selectSort.value);
  general(sortBy);
});

const showAll = document.getElementById('showAll');

showAll.addEventListener('click', () => {
  list.innerHTML = '';
  general(orderData(POKEMON));
});

document.getElementById('search').addEventListener('input', () => {
  const textSarch = document.getElementById('search').value;
  const abc = search(sortData, textSarch.toUpperCase());
  list.innerHTML = '';
  general(abc);
});

const selectCandies = document.getElementById('selectCandies');
selectCandies.addEventListener('change', () => {
  list.innerHTML = '';
  if (selectCandies.value === '0') {
    general(sortData);
  } else {
    general(candies(sortData, selectCandies.value));
  }
});
