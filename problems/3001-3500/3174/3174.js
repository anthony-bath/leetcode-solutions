/**
 * @param {string} s
 * @return {string}
 */
const clearDigits = function (s) {
  while (/[a-z]\d/.test(s)) {
    s = s.replace(/[a-z]\d/, '');
  }

  return s;
};
