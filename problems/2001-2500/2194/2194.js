/**
 * @param {string} s
 * @return {string[]}
 */
const cellsInRange = function (s) {
  const [start, end] = s.split(':');

  const startCol = start.charCodeAt(0);
  const endCol = end.charCodeAt(0);
  const startRow = Number(start[1]);
  const endRow = Number(end[1]);

  const result = [];

  for (let col = startCol; col <= endCol; col++) {
    for (let row = startRow; row <= endRow; row++) {
      result.push(`${String.fromCharCode(col)}${row}`);
    }
  }

  return result;
};
