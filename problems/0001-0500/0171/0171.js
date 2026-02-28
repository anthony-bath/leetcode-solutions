/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (columnTitle) {
  let number = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const col = columnTitle.charCodeAt(columnTitle.length - 1 - i) - 64;
    number += Math.pow(26, i) * col;
  }

  return number;
};
