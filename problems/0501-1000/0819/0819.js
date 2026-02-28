/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const bannedSet = new Set(banned);

  const freq = paragraph
    .toLowerCase()
    .replace(/[^a-z]/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !bannedSet.has(w))
    .reduce((counts, word) => counts.set(word, (counts.get(word) ?? 0) + 1), new Map());

  return Array.from(freq)
    .sort(([w1, c1], [w2, c2]) => c1 - c2)
    .pop()[0];
};
