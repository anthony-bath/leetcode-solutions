/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = function (grid) {
  const rows = new Map();
  const cols = new Map();
  const [W, H] = [grid[0].length, grid.length];

  for (let col = 0; col < grid[0].length; col++) {
    const colData = Array(H).fill();

    for (let row = 0; row < grid.length; row++) {
      colData[row] = grid[row][col];

      if (col > 0) continue;

      const key = grid[row].join(',');
      rows.set(key, (rows.get(key) ?? 0) + 1);
    }

    const key = colData.join(',');
    cols.set(key, (cols.get(key) ?? 0) + 1);
  }

  let total = 0;

  for (const [key, rowCount] of rows) {
    if (cols.has(key)) {
      total += rowCount * cols.get(key);
    }
  }

  return total;
};
