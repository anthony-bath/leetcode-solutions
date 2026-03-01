/**
 * @param {number[][]} grid
 * @return {number}
 */
const countServers = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const rowCount = Array(m).fill(0);
  const colCount = Array(n).fill(0);

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) {
        rowCount[r] += 1;
        colCount[c] += 1;
      }
    }
  }

  let count = 0;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1 && (rowCount[r] > 1 || colCount[c] > 1)) {
        count += 1;
      }
    }
  }

  return count;
};
