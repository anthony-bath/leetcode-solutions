/**
 * @param {string} s
 * @return {number}
 */
const minimizedStringLength = function (s) {
  return new Set(s).size;
};
