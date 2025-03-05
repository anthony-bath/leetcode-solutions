/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  let label = '';

  while (columnNumber > 0) {
    let next = columnNumber % 26;
    columnNumber = Math.floor(columnNumber / 26);

    if (next === 0) {
      next = 26;
      columnNumber--;
    }

    label = `${String.fromCharCode(64 + next)}${label}`;
  }

  return label;
};
