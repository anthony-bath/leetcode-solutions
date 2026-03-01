/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
const percentageLetter = function (s, letter) {
  return Math.floor((100 * [...s.matchAll(new RegExp(letter, 'g'))].length) / s.length);
};
