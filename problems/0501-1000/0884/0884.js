/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = function (s1, s2) {
  const words = `${s1} ${s2}`.split(' ');
  const unique = new Set();
  const skipped = new Set();

  for (const word of words) {
    if (skipped.has(word)) continue;

    if (unique.has(word)) {
      unique.delete(word);
      skipped.add(word);
    } else {
      unique.add(word);
    }
  }

  return [...unique];
};
