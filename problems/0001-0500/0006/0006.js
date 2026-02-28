/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) return s;

  const output = new Array(numRows).fill('');
  let dir = 1;
  let y = 0;
  let i = 0;

  while (i < s.length) {
    if (y === 0) {
      dir = 1;
    }

    if (y === numRows - 1) {
      dir = 0;
    }

    if (y < numRows && dir) {
      output[y++] += s[i++];
    }

    if (!dir) {
      output[y--] += s[i++];
    }
  }

  return output.join('');
};
