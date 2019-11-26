import {
  orderData, searchPokemon, searchGroup, topDiez, filters, getOption, candies,
} from '../src/data.js';
import POKEMON from '../src/data/pokemon/pokemon.js';

describe('orderData ', () => {
  test('debería ser una función', () => {
    expect(typeof orderData).toBe('function');
  });
  test('El primer valor de orderData para un pokemon fuerte debría de ser Snorlax', () => {
    expect(orderData(POKEMON, 'strong')[0].name).toEqual('Snorlax');
  });
  test('El primer valor de orderData para un pokemon debil debría de ser Exeggcute', () => {
    expect(orderData(POKEMON, 'weak')[0].name).toEqual('Exeggutor');
  });
  test('El primer valor de orderData para ninguna condición debría de ser Abra', () => {
    expect(orderData(POKEMON)[0].name).toEqual('Abra');
  });
});

describe('searchPokemon ', () => {
  test('debería ser una función', () => {
    expect(typeof searchPokemon).toBe('function');
  });
  test('Debería de retornar ...', () => {
    expect(searchPokemon(POKEMON, '001').name).toBe('Bulbasaur');
  });
});

describe('searchGroup ', () => {
  test('debería ser una función', () => {
    expect(typeof searchGroup).toBe('function');
  });
  test('Debería retornar .', () => {
    expect(searchGroup(POKEMON, 'ABRA')[0].name).toBe('Abra');
  });
});

describe('topDiez ', () => {
  test('debería ser una función', () => {
    expect(typeof topDiez).toBe('function');
  });
  test('debería retornar .', () => {
    expect(topDiez(POKEMON)[0].name).toBe('Pidgey');
  });
});

describe('filters ', () => {
  test('debería ser una función', () => {
    expect(typeof filters).toBe('function');
  });
  test('debería ...', () => {
    expect(filters(POKEMON, 'type', 'Grass')[0].name).toBe('Paras');
  });
  test('debería ....', () => {
    expect(filters(POKEMON, 'weaknesses', 'Fire')[0].name).toBe('Weedle');
  });
});

describe('getOption ', () => {
  test('debería ser una función', () => {
    expect(typeof getOption).toBe('function');
  });
  test('debería ...', () => {
    expect(getOption(POKEMON, 'type')[0]).toBe('Normal');
  });
});

describe('candies ', () => {
  test('debería ser una función', () => {
    expect(typeof candies).toBe('function');
  });
  test('debería ser una función.', () => {
    expect(candies(POKEMON, '1')[0].name).toBe('Pidgey');
  });
  test('debería ser una función..', () => {
    expect(candies(POKEMON, '2')[0].name).toBe('Zubat');
  });
  test('debería ser una función...', () => {
    expect(candies(POKEMON, '3')[0].name).toBe('Poliwhirl');
  });
  test('debería ser una función....', () => {
    expect(candies(POKEMON, '4')[0].name).toBe('Magikarp');
  });
  test('debería ser una función.....', () => {
    expect(candies(POKEMON, '5')).toBe('Fuera de rango');
  });
});
