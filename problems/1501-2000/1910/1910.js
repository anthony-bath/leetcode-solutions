/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
const removeOccurrences = function (s, part) {
  while (true) {
    let start = s.length;
    s = s.replace(part, '');

    if (start === s.length) break;
  }

  return s;
};
