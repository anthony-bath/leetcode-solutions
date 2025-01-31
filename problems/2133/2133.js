/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const checkValid = function (matrix) {
  const n = matrix.length;

  for (let row = 0; row < n; row++) {
    const rowCheck = Array(n);
    const colCheck = Array(n);

    for (let col = 0; col < n; col++) {
      const rowValIndex = matrix[row][col] - 1;
      if (rowCheck[rowValIndex]) return false;

      const colValIndex = matrix[col][row] - 1;
      if (colCheck[colValIndex]) return false;

      rowCheck[rowValIndex] = true;
      colCheck[colValIndex] = true;
    }
  }

  return true;
};
