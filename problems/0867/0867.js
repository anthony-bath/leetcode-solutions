/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = function (matrix) {
  const W = matrix.length;
  const H = matrix[0].length;

  const transposed = Array.from({ length: H }, () => Array(W).fill());

  for (let i = 0; i < W; i++) {
    for (let j = 0; j < H; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
};
