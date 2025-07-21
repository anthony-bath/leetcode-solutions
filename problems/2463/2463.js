/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let row = 0;
  let ones = 0;

  for (let i = 0; i < mat.length; i++) {
    const rowOnes = mat[i].reduce((sum, num) => sum + num, 0);

    if (rowOnes > ones) {
      ones = rowOnes;
      row = i;
    }
  }

  return [row, ones];
};
