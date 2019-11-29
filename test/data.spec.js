import {
  orderData, searchPokemon, searchGroup, topDiez, filters, getOption, candies,
} from '../src/data.js';
import POKEMON from '../src/data/pokemon/pokemon.js';

describe('orderData ', () => {
  test('debería ser una función', () => {
    expect(typeof orderData).toBe('function');
  });
  test('Debería de retornar "Snorlax", como nombre del primer pokemon más fuerte', () => {
    expect(orderData(POKEMON, 'strong')[0].name).toEqual('Snorlax');
  });
  test('Debería de retornar "Exeggutor", como nombre del primer pokemon más débil', () => {
    expect(orderData(POKEMON, 'weak')[0].name).toEqual('Exeggutor');
  });
  test('Debería retornar "Abra", como nombre del primer pokemon ordenado ascendentemente', () => {
    expect(orderData(POKEMON)[0].name).toEqual('Abra');
  });
});

describe('searchPokemon ', () => {
  test('debería ser una función', () => {
    expect(typeof searchPokemon).toBe('function');
  });
  test('Debería retornar "Bulbasaur", para la búsqueda del pokemon número 001', () => {
    expect(searchPokemon(POKEMON, '001').name).toBe('Bulbasaur');
  });
});

describe('searchGroup ', () => {
  test('debería ser una función', () => {
    expect(typeof searchGroup).toBe('function');
  });
  test('Debería retornar "Abra", para cuando se busca ABRA', () => {
    expect(searchGroup(POKEMON, 'AB')[0].name).toBe('Abra');
  });
});

describe('topDiez ', () => {
  test('debería ser una función', () => {
    expect(typeof topDiez).toBe('function');
  });
  test('debería retornar "Pidgey", para el primer pokemon del topTen', () => {
    expect(topDiez(POKEMON)[0].name).toBe('Pidgey');
  });
});

describe('filters ', () => {
  test('debería ser una función', () => {
    expect(typeof filters).toBe('function');
  });
  test('debería retornar "Paras", para el primer pokemon de tipo grass', () => {
    expect(filters(POKEMON, 'type', 'Grass')[0].name).toBe('Paras');
  });
  test('debería retornar "Weedle", para el primer pokemon de debilidad Fire', () => {
    expect(filters(POKEMON, 'weaknesses', 'Fire')[0].name).toBe('Weedle');
  });
});

describe('getOption ', () => {
  test('debería ser una función', () => {
    expect(typeof getOption).toBe('function');
  });
  test('debería retornar "Normal", para el primer elemento del array de tipos de pokemon', () => {
    expect(getOption(POKEMON, 'type')[0]).toBe('Normal');
  });
});

describe('candies ', () => {
  test('debería ser una función', () => {
    expect(typeof candies).toBe('function');
  });
  test('debería retornar "Pidgey", para el primer pokemon del rango [0-25] de candies', () => {
    expect(candies(POKEMON, '1')[0].name).toBe('Pidgey');
  });
  test('debería retornar "Zubat", para el primer pokemon del rango [26-50] de candies', () => {
    expect(candies(POKEMON, '2')[0].name).toBe('Zubat');
  });
  test('debería retornar "Poliwhirl", para el primer pokemon del rango [51-100] de candies', () => {
    expect(candies(POKEMON, '3')[0].name).toBe('Poliwhirl');
  });
  test('debería retornar "Magikarp", para el primer pokemon del rango [100++] de candies', () => {
    expect(candies(POKEMON, '4')[0].name).toBe('Magikarp');
  });
  test('debería retornar el texto "Fuera de rango", para un rango distinto a los establecidos', () => {
    expect(candies(POKEMON, '5')).toBe('Fuera de rango');
  });
});
