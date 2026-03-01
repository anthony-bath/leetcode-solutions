/**
 * @param {string} s
 * @return {number}
 */
const secondHighest = function (s) {
  const digits = [...new Set(s.match(/\d/g)?.map(Number))].sort((a, b) => b - a);

  return digits.length >= 2 ? digits[1] : -1;
};
