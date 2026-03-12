/**
 * @param {string} palindrome
 * @return {string}
 */
const breakPalindrome = function (palindrome) {
  if (palindrome.length === 1) return '';

  const letters = palindrome.split('');
  let swapped = false;

  for (let i = 0; i < letters.length >> 1; i++) {
    if (letters[i] !== 'a') {
      letters[i] = 'a';
      swapped = true;
      break;
    }
  }

  if (!swapped) {
    letters[letters.length - 1] = 'b';
  }

  return letters.join('');
};
