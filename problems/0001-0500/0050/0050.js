/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  if (n === 0) return 1;
  if (x === 0) return 0;
  if (x === 1) return 1;

  let exponent = n;

  if (exponent < 0) {
    x = 1 / x;
    exponent = -exponent;
  }

  let result = 1;
  let base = x;

  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result *= base;
    }

    base *= base;
    exponent = Math.floor(exponent / 2);
  }

  return result;
};
