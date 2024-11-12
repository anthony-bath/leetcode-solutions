/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const sumBase = function (n, k) {
  return n
    .toString(k)
    .split('')
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
};
