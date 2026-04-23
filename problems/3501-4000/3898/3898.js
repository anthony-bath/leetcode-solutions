/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDegrees = function (matrix) {
  return matrix.map((m) => m.reduce((d, n) => d + n, 0));
};
