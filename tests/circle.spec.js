const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle('olá')).toBe(undefined);
    expect(circle(5)).toBeInstanceOf(Object);
    expect(circle(5)).toEqual(expect.objectContaining({
      radius: expect.any(Number), 
      area: expect.any(Number),
      circumference: expect.any(Number),
    }));
    expect(circle()).toBe(undefined);
    expect(circle(2)).toEqual(expect.objectContaining({
      circumference: 12.56,
    }));
    expect(circle(3)).toEqual(expect.objectContaining({
      area: parseFloat(3.14 * 3 * 3),
    }));
    expect(circle(3)).toEqual(expect.objectContaining({
      radius: 3, 
      area: parseFloat(3.14 * 3 * 3),
      circumference: parseFloat(2 * 3.14 * 3),
    }));
  });
});
