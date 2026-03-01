/**
 * @param {number} n
 * @return {number}
 */
const numberOfCuts = function (n) {
  if (n === 1) return 0;
  return n % 2 ? n : n / 2;
};
