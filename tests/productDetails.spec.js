const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails).toBeInstanceOf(Function);
    expect(productDetails('sabonete', 'shampoo')).toBeInstanceOf(Array);
    expect(productDetails('sabonete', 'shampoo')).toHaveLength(2);
    expect(productDetails('sabonete', 'shampoo')).toEqual(expect.arrayContaining([expect.objectContaining({})], [expect.objectContaining({})]));
    expect(productDetails('sabonete', 'shampoo')[0]).not.toEqual(productDetails('sabonete', 'shampoo')[1]);
    expect(productDetails('sabonete', 'shampoo')[0]).toHaveProperty(['details', 'productId'], 'sabonete123');
    expect(productDetails('sabonete', 'shampoo')[0]).toHaveProperty(['details', 'productId'], 'sabonete123');
    expect(productDetails('sabonete', 'shampoo')[1]).toHaveProperty(['details', 'productId'], 'shampoo123');
  });
});
