const { max } = Math;

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
const largestLocal = function (grid) {
  const n = grid.length;
  const result = Array.from({ length: n - 2 }, () => Array(n - 2));

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      result[i][j] = max(
        grid[i][j],
        grid[i][j + 1],
        grid[i][j + 2],
        grid[i + 1][j],
        grid[i + 1][j + 1],
        grid[i + 1][j + 2],
        grid[i + 2][j],
        grid[i + 2][j + 1],
        grid[i + 2][j + 2]
      );
    }
  }

  return result;
};
