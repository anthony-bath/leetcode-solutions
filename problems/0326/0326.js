/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
  if (n === 1) return true;
  if (n <= 0 || n % 3 !== 0) return false;

  while (n % 3 === 0) n = n / 3;

  return n === 1;
};
