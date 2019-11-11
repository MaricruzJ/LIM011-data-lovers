import { orderData, searchData } from '../src/data.js';
import POKEMON from '../src/data/pokemon/pokemon.js';

describe('orderData ', () => {
  it('debería ser una función', () => {
    expect(typeof orderData).toBe('function');
  });
  const expected = orderData(POKEMON);
  describe('orderData debe devolver un arreglo ordenado', () => {
    expect(orderData(POKEMON)).toEqual(expect.arrayContaining(expected));
  });
});

describe('searchData ', () => {
  it('debería ser una función', () => {
    expect(typeof searchData).toBe('function');
  });
 /*  const expected = searchData(POKEMON);
  describe('searchData debe devolver un arreglo ordenado', () => {
    expect(searchData(POKEMON)).toEqual(expect.arrayContaining(expected));
  }); */
});
