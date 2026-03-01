/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  let pointer = 0;
  let result = '';

  while (pointer < word1.length || pointer < word2.length) {
    if (pointer < word1.length) {
      result += word1[pointer];
    }

    if (pointer < word2.length) {
      result += word2[pointer];
    }

    pointer++;
  }

  return result;
};
