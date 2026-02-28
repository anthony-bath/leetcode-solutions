/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function (words, k) {
  const freq = new Map();

  for (const word of words) {
    freq.set(word, (freq.get(word) ?? 0) + 1);
  }

  return [...freq.keys()]
    .sort((a, b) => {
      const ac = freq.get(a);
      const bc = freq.get(b);

      return ac !== bc ? bc - ac : a.localeCompare(b);
    })
    .slice(0, k);
};
