/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const satisfiesConditions = function (grid) {
  const [w, h] = [grid[0].length, grid.length];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const val = grid[i][j];

      if (i + 1 < h) {
        if (grid[i + 1][j] !== val) return false;
      }

      if (j + 1 < w) {
        if (grid[i][j + 1] === val) return false;
      }
    }
  }

  return true;
};
