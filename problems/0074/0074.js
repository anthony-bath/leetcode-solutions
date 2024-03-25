/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  let x1 = 0;
  let x2 = matrix[0].length - 1;
  let y = 0;

  while (y < matrix.length - 1 && matrix[y][x2] < target) {
    y++;
  }

  while (x1 <= x2) {
    const mid = (x1 + x2) >> 1;
    const val = matrix[y][mid];

    if (val === target) {
      return true;
    } else if (val < target) {
      x1 = mid + 1;
    } else {
      x2 = mid - 1;
    }
  }

  return false;
};
