/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = function (word, ch) {
  const index = word.indexOf(ch);

  if (index === -1) return word;

  const prefix = word
    .substring(0, index + 1)
    .split('')
    .reverse()
    .join('');

  const suffix = word.substring(index + 1);

  return `${prefix}${suffix}`;
};
