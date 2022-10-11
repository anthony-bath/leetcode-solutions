/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const values = s.split('').map((c) => lookup[c]);

  let total = 0;
  let i = 0;

  while (i < values.length) {
    if (values[i + 1] > values[i]) {
      total += values[i + 1] - values[i];
      i += 2;
    } else {
      total += values[i];
      i += 1;
    }
  }

  return total;
};

const lookup = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};
