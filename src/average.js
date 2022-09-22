const average = (array) => {
  let sum = 0;

  if (array.length === 0) {
    return undefined;
  }

  for (let i of array) {
    if (typeof i !== 'number') {
      return undefined;
    }
    sum += i;
  } return Math.round(sum / array.length);
};

  module.exports = average;
