/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function (s) {
  return s
    .split(' ')
    .sort((w1, w2) => w1[w1.length - 1] - w2[w2.length - 1])
    .map((w) => w.replace(/\d/, ''))
    .join(' ');
};
