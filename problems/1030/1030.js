const { abs } = Math;

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
const allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const items = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const distance = abs(r - rCenter) + abs(c - cCenter);
      items.push({ cell: [r, c], distance });
    }
  }

  return items.sort((a, b) => a.distance - b.distance).map((i) => i.cell);
};
