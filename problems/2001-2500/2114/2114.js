/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = (sentences) => {
  return Math.max(...sentences.map((sentence) => sentence.split(' ').length));
};
