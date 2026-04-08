const VOWELS = ['a', 'e', 'i', 'o', 'u'];

/**
 * @param {string} s
 * @return {string}
 */
const trimTrailingVowels = function (s) {
  let right = s.length - 1;

  while (right >= 0 && VOWELS.includes(s[right])) {
    right--;
  }

  return s.substring(0, right + 1);
};
