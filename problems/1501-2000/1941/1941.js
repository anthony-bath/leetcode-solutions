/**
 * @param {string} s
 * @return {boolean}
 */
const areOccurrencesEqual = function (s) {
  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) ?? 0) + 1);
  }

  const counts = [...freq.values()];

  return counts.every((count) => count === counts[0]);
};
