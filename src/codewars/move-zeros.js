//my solution
const moveZeros = (arr) =>
  arr.filter((v) => v !== 0).concat(arr.filter((v) => v === 0));
