/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function (mat) {
  let sum = 0;

  for (let row = 0, cp = 0, cs = mat.length - 1; row < mat.length; row++, cp++, cs--) {
    sum += mat[row][cp];
    sum += cp === cs ? 0 : mat[row][cs];
  }

  return sum;
};
