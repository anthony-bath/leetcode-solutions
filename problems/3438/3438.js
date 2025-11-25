/**
 * @param {string} s
 * @return {string}
 */
const findValidPair = function (s) {
  const freq = Array(10).fill(0);

  for (const char of s) {
    freq[char]++;
  }

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) continue;

    if (freq[s[i]] == s[i] && freq[s[i - 1]] == s[i - 1]) {
      return `${s[i - 1]}${s[i]}`;
    }
  }

  return '';
};
