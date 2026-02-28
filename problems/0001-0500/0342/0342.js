const { log } = Math;

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n === 1) return true;
  if (n <= 0 || n % 4 !== 0) return false;

  return Number.isInteger(log(n) / log(4));
};
