/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  if (numRows === 1) return [[1]];

  let rows = [[1], [1, 1]];

  for (let rowNum = 3; rowNum <= numRows; rowNum++) {
    const row = [1];
    const prevRow = rows[rowNum - 2];

    for (let i = 1; i < prevRow.length; i++) {
      row.push(prevRow[i - 1] + prevRow[i]);
    }

    row.push(1);
    rows.push(row);
  }

  return rows;
};
