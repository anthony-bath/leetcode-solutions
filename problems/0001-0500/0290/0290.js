/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
  const words = s.split(' ');

  if (words.length !== pattern.length) return false;

  const lookup = new Map();
  const inverse = new Map();
  const patternParts = pattern.split('');

  for (let i = 0; i < patternParts.length; i++) {
    const char = patternParts[i];

    if (lookup.has(char) && lookup.get(char) !== words[i]) {
      return false;
    }

    if (inverse.has(words[i]) && inverse.get(words[i]) !== char) {
      return false;
    }

    lookup.set(char, words[i]);
    inverse.set(words[i], char);
  }

  return true;
};
