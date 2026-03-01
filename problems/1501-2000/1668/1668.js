/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = function (sequence, word) {
  let k = 0;

  while (sequence.includes(word.repeat(k))) {
    k++;
  }

  return k - 1;
};
