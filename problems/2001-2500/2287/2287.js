/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
const rearrangeCharacters = function (s, target) {
  const targetFreq = target
    .split('')
    .reduce((freq, letter) => freq.set(letter, (freq.get(letter) ?? 0) + 1), new Map());

  const sFreq = new Map();

  for (const letter of s) {
    if (targetFreq.has(letter)) {
      sFreq.set(letter, (sFreq.get(letter) ?? 0) + 1);
    }
  }

  if (sFreq.size < targetFreq.size) return 0;

  let min = Infinity;

  for (const [letter, count] of sFreq) {
    const possible = Math.floor(count / targetFreq.get(letter));
    min = Math.min(min, possible);
  }

  return min;
};
