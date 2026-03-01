/**
 * @param {string} s
 * @return {boolean}
 */
const checkString = function (s) {
  const aIndex = s.lastIndexOf('a');
  const bIndex = s.indexOf('b');

  return aIndex < bIndex || bIndex === -1;
};
