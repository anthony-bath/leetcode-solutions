/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = function (words, pref) {
  return words.filter((word) => word.startsWith(pref)).length;
};
