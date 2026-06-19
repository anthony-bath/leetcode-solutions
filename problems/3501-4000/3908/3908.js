/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
const validDigit = function (n, x) {
  const nStr = `${n}`;

  return !nStr.startsWith(x) && nStr.includes(x);
};
