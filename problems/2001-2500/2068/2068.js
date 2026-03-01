/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const checkAlmostEquivalent = function (word1, word2) {
  const freq1 = [...word1].reduce(
    (map, letter) => map.set(letter, (map.get(letter) ?? 0) + 1),
    new Map()
  );
  const freq2 = [...word2].reduce(
    (map, letter) => map.set(letter, (map.get(letter) ?? 0) + 1),
    new Map()
  );

  const allLetters = new Set([...freq1.keys(), ...freq2.keys()]);

  for (const letter of allLetters) {
    const diff = (freq1.get(letter) ?? 0) - (freq2.get(letter) ?? 0);

    if (Math.abs(diff) > 3) return false;
  }

  return true;
};
