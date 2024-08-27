/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function (words) {
  return words.filter((word, i) =>
    words.some((otherWord, j) => i !== j && otherWord.includes(word))
  );
};
