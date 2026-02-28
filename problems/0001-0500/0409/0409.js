/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const freq = new Map();
  let odds = 0;

  for (const char of s) {
    freq.set(char, (freq.get(char) ?? 0) + 1);

    if (freq.get(char) % 2 === 0) {
      odds--;
    } else {
      odds++;
    }
  }

  if (odds > 1) {
    return s.length - odds + 1;
  }

  return s.length;
};
