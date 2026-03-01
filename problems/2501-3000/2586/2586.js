/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const vowelStrings = function (words, left, right) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;

  for (let i = left; i <= right; i++) {
    const word = words[i];

    if (vowels.has(word[0]) && vowels.has(word.at(-1))) {
      count++;
    }
  }

  return count;
};
