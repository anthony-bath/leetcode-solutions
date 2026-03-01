/**
 * @param {string} word
 * @return {number}
 */
const numDifferentIntegers = function (word) {
  return new Set(word.match(/\d+/g)?.map(BigInt)).size;
};
