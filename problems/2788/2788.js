/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
const splitWordsBySeparator = function (words, separator) {
  const result = [];

  for (const string of words) {
    const parts = string.split(separator);

    for (const part of parts) {
      if (!part) continue;
      result.push(part);
    }
  }

  return result;
};
