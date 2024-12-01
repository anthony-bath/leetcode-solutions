/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
const numOfStrings = function (patterns, word) {
  return patterns.filter((pattern) => word.includes(pattern)).length;
};
