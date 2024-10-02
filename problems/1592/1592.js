/**
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = function (text) {
  const words = text.trim().split(/\s+/);

  if (words.length === 1) {
    return `${words[0]}${' '.repeat(text.length - words[0].length)}`;
  }

  const spaces = text.length - words.reduce((len, word) => len + word.length, 0);
  const per = Math.floor(spaces / (words.length - 1));

  return `${words.join(' '.repeat(per))}${' '.repeat(spaces % (words.length - 1))}`;
};
