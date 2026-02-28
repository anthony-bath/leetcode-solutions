/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
  const codes = Array(word.length)
    .fill()
    .map((_, i) => word.charCodeAt(i));

  const caps = codes.filter((c) => c < 97).length;
  const lows = word.length - caps;

  if (caps === word.length || lows === word.length) {
    return true;
  }

  return caps === 1 && codes[0] < 97;
};
