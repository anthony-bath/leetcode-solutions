/**
 * @param {string} s
 * @return {string}
 */
const largestEven = function (s) {
  if (s.indexOf('2') === -1) return '';
  if (s.endsWith('2')) return s;

  return s.substring(0, s.lastIndexOf('2') + 1);
};
