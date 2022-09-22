const createStudent = (nome) => {
    const object = { name: nome, feedback: () => 'Eita pessoa boa!' };
    return object;
  };

module.exports = createStudent;
