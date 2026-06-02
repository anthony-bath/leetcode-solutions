/**
 * @param {number} n
 * @return {number}
 */
const countCommas = function (n) {
  if (n < 1000) return 0;

  return n - 999;
};
