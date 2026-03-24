/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort();
  const seen = new Set(['']);
  let best = '';

  for (const word of words) {
    const prev = word.slice(0, -1);

    if (seen.has(prev)) {
      seen.add(word);

      if (word.length > best.length) {
        best = word;
      }
    }
  }

  return best;
};
