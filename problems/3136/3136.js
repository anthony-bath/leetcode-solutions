/**
 * @param {string} word
 * @return {boolean}
 */
const isValid = function (word) {
  if (word.length < 3) return false;
  if (/[^A-Za-z0-9]/.test(word)) return false;
  if (!/[AEIOUaeiou]/.test(word)) return false;
  if (!/[^AEIOUaeiou0-9]/.test(word)) return false;

  return true;
};
