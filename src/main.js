import POKEMON from './data/pokemon/pokemon.js';
import { orderData, searchData, search, filters, getOption, topDiez } from './data.js';
 
const list = document.getElementById('list');
const profile = document.getElementById('profile');
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

const templatePrincipal = (pokemon) => {
const templateOne = document.createElement('div');
templateOne.classList.add('item-pokemon');

const p = document.createElement('p');
const divImage = document.createElement('img');

p.setAttribute('src', pokemon.name);
divImage.setAttribute('src', pokemon.img);

templateOne.appendChild(divImage);
templateOne.appendChild(p);

list.appendChild(templateOne);

list.innerHTML = templateOne;
};
 
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
 
document.getElementById('search').addEventListener('click', () => {
  const textSarch = document.getElementById('search').value;
  const abc = search(order, textSarch.toUpperCase());
  console.log(abc);
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
 
    templateDetail(data);
 
    const nextEvolution = document.getElementById('nextEvolution');
    const preEvolution = document.getElementById('preEvolution');
 
    const templateEvolution = (elementHTML, evolution, texto) => {
      const title = document.createElement('p');
      title.innerHTML = texto;
 
      elementHTML.appendChild(title);
 
      evolution.forEach((next) => {
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
        elementHTML.appendChild(div);
 
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
 
const topTen = document.getElementById('topTen');
 
const mostrarTopTen = topDiez(order);

topTen.addEventListener('click', () => {
  mostrarTopTen.map((data) => {
    const divGeneral = document.createElement('div');
    divGeneral.innerHTML = templatePrincipal(data); 

      divGeneral.addEventListener('click', () => {
      document.getElementById('header').style.display = 'none';
      document.getElementById('root').style.paddingTop = '0px';
      document.getElementById('profile').style.display = 'block';
      document.getElementById('home').style.display = 'none';
      document.getElementById('header').style.display = 'none';
   
      templateDetail(data);
    });
  });
});
 

const showFilters = filters(order, 'filter', 'value');
let showFiltersOrder = orderData(showFilters);

const selectTypeFilters = document.querySelector('#id_type');
getOption('type').map((element) => {
  const option = document.createElement('option');
  option.setAttribute('value', element);
  option.innerText = element;
 
  selectTypeFilters.appendChild(option);

  selectTypeFilters.addEventListener('change', (event)=>{
    showFiltersOrder = filters(order, 'type', event.target.value);
    console.log(showFiltersOrder);
    list.innerHTML = '';

      showFiltersOrder.map((data)=>{
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
     
        templateDetail(data);
      });
    });
  });
});
 
const selectWeaknessesFilters = document.querySelector('#id_weaknesses');
getOption('weaknesses').map((element) => {
  const option = document.createElement('option');
  option.setAttribute('value', element);
  option.innerText = element;
 
  selectWeaknessesFilters.appendChild(option);

  selectWeaknessesFilters.addEventListener('change', (event)=>{
    showFiltersOrder = filters(order, 'weaknesses', event.target.value);
    console.log(showFiltersOrder);
    list.innerHTML = '';

    showFiltersOrder.map((data)=>{
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
     
        templateDetail(data);
      });

    });
  });
});
