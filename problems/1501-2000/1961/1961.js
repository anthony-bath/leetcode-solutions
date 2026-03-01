/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const isPrefixString = function (s, words) {
  if (s === words[0]) return true;

  let compare = words[0];
  let index = 1;

  while (s.startsWith(compare)) {
    compare += words[index++];

    if (compare === s) return true;
  }

  return false;
};
