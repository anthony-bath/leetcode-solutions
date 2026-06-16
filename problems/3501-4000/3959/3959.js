/**
 * @param {number} n
 * @return {boolean}
 */
const checkGoodInteger = function (n) {
  let sum = 0;
  let squareSum = 0;

  while (n > 0) {
    const next = n % 10;

    sum += next;
    squareSum += next * next;

    if (squareSum - sum >= 50) {
      return true;
    }

    n = (n - next) / 10;
  }

  return false;
};
