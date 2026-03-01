/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let common = 0;
  const bounds = a > b ? a : b;

  for (let x = 1; x <= bounds; x++) {
    if (a % x === 0 && b % x === 0) {
      common++;
    }
  }

  return common;
};
