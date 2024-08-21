/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const rowMins = new Set(matrix.map((row) => Math.min(...row)));
  const colMaxes = new Set(
    Array.from({ length: matrix[0].length }, (_, i) => i).map((col) =>
      Math.max(...matrix.map((row) => row[col]))
    )
  );

  return [...rowMins].filter((n) => colMaxes.has(n));
};
