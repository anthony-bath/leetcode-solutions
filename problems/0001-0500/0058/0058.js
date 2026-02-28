/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let index = s.length - 1;
  let length = 0;

  while (s[index] === ' ' && index >= 0) {
    index--;
  }

  while (s[index] !== ' ' && index >= 0) {
    length++;
    index--;
  }

  return length;
};
