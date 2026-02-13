/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxSum = function (grid) {
  const MAX_INITIAL_ROW = grid.length - 3;
  const MAX_INITIAL_COL = grid[0].length - 3;
  let best = 0;

  for (let row = 0; row <= MAX_INITIAL_ROW; row++) {
    for (let col = 0; col <= MAX_INITIAL_COL; col++) {
      const top = grid[row][col] + grid[row][col + 1] + grid[row][col + 2];
      const mid = grid[row + 1][col + 1];
      const bot = grid[row + 2][col] + grid[row + 2][col + 1] + grid[row + 2][col + 2];
      const total = top + mid + bot;

      if (total > best) {
        best = total;
      }
    }
  }

  return best;
};
