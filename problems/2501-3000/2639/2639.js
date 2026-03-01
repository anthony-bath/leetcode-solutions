/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findColumnWidth = function (grid) {
  const cols = grid[0].length;
  const rows = grid.length;
  const result = Array(cols).fill(0);

  for (let col = 0; col < cols; col++) {
    let max = 0;

    for (let row = 0; row < rows; row++) {
      const colWidth = `${grid[row][col]}`.length;

      if (colWidth > max) {
        max = colWidth;
      }
    }

    result[col] = max;
  }

  return result;
};
