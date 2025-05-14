/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const minDeletion = function (s, k) {
  const freq = [...s].reduce((freq, char) => {
    freq[char] = (freq[char] ?? 0) + 1;
    return freq;
  }, {});

  const sorted = Object.values(freq).sort((a, b) => a - b);
  const size = sorted.length;

  if (size <= k) return 0;

  return sorted.slice(0, size - k).reduce((sum, count) => sum + count, 0);
};
