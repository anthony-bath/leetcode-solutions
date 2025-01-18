/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = function (words1, words2) {
  const w1Map = freq(words1);
  const w2Map = freq(words2);

  let result = 0;

  for (const [word, count] of w1Map) {
    if (count > 1) continue;
    if (w2Map.get(word) !== 1) continue;

    result++;
  }

  return result;
};

function freq(array) {
  return array.reduce((map, word) => map.set(word, (map.get(word) ?? 0) + 1), new Map());
}
