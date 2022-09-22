const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    expect(getCharacter()).toEqual(undefined);
    expect(getCharacter('Arya')).toEqual(expect.objectContaining({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: [ 'Not today', 'A girl has no name.']
    }));
    expect(getCharacter('Brienne')).toEqual(expect.objectContaining({
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']
    }));
    expect(getCharacter('Melissandre')).toEqual(expect.objectContaining({
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']
    }));
    expect(getCharacter('aRyA')).toEqual(expect.objectContaining({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: [ 'Not today', 'A girl has no name.']
    }));
    expect(getCharacter('oláááá')).toEqual(undefined);
  });
});
