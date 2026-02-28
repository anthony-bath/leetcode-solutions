/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function (s) {
  return s.indexOf('LLL') === -1 && s.indexOf('A') === s.lastIndexOf('A');
};
