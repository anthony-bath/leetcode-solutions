/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const checkXMatrix = function (grid) {
  const size = grid.length;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const isDiagonal = getIsDiagonal(row, col, size);

      if (isDiagonal && grid[row][col] === 0) {
        return false;
      }

      if (!isDiagonal && grid[row][col] !== 0) {
        return false;
      }
    }
  }

  return true;
};

function getIsDiagonal(row, col, size) {
  return row === col || row === size - 1 - col;
}
