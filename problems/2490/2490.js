/**
 * @param {string} sentence
 * @return {boolean}
 */
const isCircularSentence = function (sentence) {
  const words = sentence.split(' ');

  if (words[0][0] !== sentence[sentence.length - 1]) return false;

  for (let i = 0; i < words.length - 1; i++) {
    const c = words[i];
    const n = words[i + 1];

    if (c[c.length - 1] !== n[0]) return false;
  }

  return true;
};
