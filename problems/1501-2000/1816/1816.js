/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function (s, k) {
  return s.split(' ').slice(0, k).join(' ');
};
