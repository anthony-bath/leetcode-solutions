/**
 * @param {number} n
 * @return {number}
 */
const smallestNumber = function (n) {
  return 2 ** (1 + Math.floor(Math.log2(n))) - 1;
};
