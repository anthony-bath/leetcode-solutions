/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function (m, n, indices) {
  const matrix = Array(m)
    .fill()
    .map(() => Array(n).fill(0));
  let oddCount = 0;

  for (const [row, col] of indices) {
    for (let updateCol = 0; updateCol < n; updateCol++) {
      matrix[row][updateCol]++;

      if (matrix[row][updateCol] % 2 === 1) {
        oddCount++;
      } else {
        oddCount--;
      }
    }

    for (let updateRow = 0; updateRow < m; updateRow++) {
      matrix[updateRow][col]++;

      if (matrix[updateRow][col] % 2 === 1) {
        oddCount++;
      } else {
        oddCount--;
      }
    }
  }

  return oddCount;
};
