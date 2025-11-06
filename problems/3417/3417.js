/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const zigzagTraversal = function (grid) {
  const [W, H] = [grid[0].length, grid.length];
  const result = [];

  for (let row = 1; row <= H; row++) {
    if (row % 2) {
      // odd row -> even indices
      for (let colIndex = 0; colIndex < W; colIndex += 2) {
        result.push(grid[row - 1][colIndex]);
      }
    } else {
      // even -> odd indices
      for (let colIndex = W % 2 ? W - 2 : W - 1; colIndex > 0; colIndex -= 2) {
        result.push(grid[row - 1][colIndex]);
      }
    }
  }

  return result;
};
