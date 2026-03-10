/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = function (text, first, second) {
  const result = [];
  const words = text.split(' ');

  for (let i = 2; i < words.length; i++) {
    if (words[i - 2] === first && words[i - 1] === second) {
      result.push(words[i]);
    }
  }

  return result;
};
