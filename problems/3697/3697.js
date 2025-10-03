/**
 * @param {number} n
 * @return {number[]}
 */
const decimalRepresentation = function (n) {
  const result = [];
  let pow = 0;

  while (n > 0) {
    const next = n % 10;

    if (next > 0) {
      result.unshift(next * 10 ** pow);
    }

    n = (n - next) / 10;
    pow++;
  }

  return result;
};
