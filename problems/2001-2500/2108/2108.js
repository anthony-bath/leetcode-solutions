/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = function (words) {
  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }

  return '';
};

function isPalindrome(word) {
  let [left, right] = [0, word.length - 1];

  while (left <= right) {
    if (word[left++] !== word[right--]) {
      return false;
    }
  }

  return true;
}
