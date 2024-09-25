/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = function (n) {
  const str = n.toString();
  if (n < 1000) return str;

  let output = '';
  for (let i = str.length - 1, count = 0; i >= 0; i--, count++) {
    if (count > 0 && count % 3 === 0) {
      output = '.' + output;
    }

    output = str[i] + output;
  }

  return output;
};
