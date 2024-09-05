/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = function (sentence, searchWord) {
  const index = sentence.split(' ').findIndex((word) => word.startsWith(searchWord));
  return index !== -1 ? index + 1 : -1;
};
