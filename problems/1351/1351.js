/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let count = 0;

  for (let row = 0; row < m; row++) {
    if (grid[row][0] < 0) {
      count += n * (m - row);
      break;
    } else {
      let [left, right] = [0, n - 1];

      while (left <= right) {
        const mid = (left + right) >> 1;

        if (grid[row][mid] < 0) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }

      count += n - left;
    }
  }

  return count;
};
