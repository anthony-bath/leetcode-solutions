const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

/**
 * @param {string} s
 * @return {string}
 */
const sortVowels = function (s) {
  const freq = new Map();

  for (const char of s) {
    if (VOWELS.has(char)) {
      freq.set(char, (freq.get(char) ?? 0) + 1);
    }
  }

  const sorted = [...freq].sort((a, b) => b[1] - a[1]);

  const result = [];
  let pos = 0;

  for (const char of s) {
    if (VOWELS.has(char)) {
      result.push(sorted[pos][0]);

      if (--sorted[pos][1] === 0) {
        pos += 1;
      }
    } else {
      result.push(char);
    }
  }

  return result.join('');
};
