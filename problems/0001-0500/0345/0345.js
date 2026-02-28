/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const vowels = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, () => vowels.pop());
};
