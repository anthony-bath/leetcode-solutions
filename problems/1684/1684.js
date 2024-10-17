/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function (allowed, words) {
  const allowedSet = new Set(allowed);

  return words.filter((word) => [...word].every((letter) => allowedSet.has(letter))).length;
};
