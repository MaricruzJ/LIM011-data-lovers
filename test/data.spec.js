import { orderData, searchPokemon } from '../src/data.js';
import POKEMON from '../src/data/pokemon/pokemon.js';

describe('orderData ', () => {
  test('debería ser una función', () => {
    expect(typeof orderData).toBe('function');
  });
  const expected = orderData(POKEMON);
  test('orderData debe devolver un arreglo', () => {
    expect(orderData(POKEMON)).toEqual(expect.arrayContaining(expected));
  });

  test('El primer valor de orderData debría de ser ...', () => {
    expect(orderData(POKEMON, 'strong')[0].name).toEqual('Snorlax');
  });
});

test('asignacion de objeto', () => {
  const data = { uno: 1 };
  data.dos = 2;
  expect(data).toEqual({ uno: 1, dos: 2 });
});

describe('searchData ', () => {
  test('debería ser una función', () => {
    expect(typeof searchPokemon).toBe('function');
  });
});
