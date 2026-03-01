/**
 * @param {string[]} words
 * @return {boolean}
 */
const makeEqual = function (words) {
  const freq = new Map();

  for (const word of words) {
    for (const letter of word) {
      freq.set(letter, (freq.get(letter) ?? 0) + 1);
    }
  }

  return [...freq.values()].every((val) => val % words.length === 0);
};
