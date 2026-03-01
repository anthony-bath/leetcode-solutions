/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = function (s) {
  let outside = true;
  let count = 0;

  for (const char of s) {
    if (char === '|') {
      outside = !outside;
      continue;
    }

    if (!outside) continue;
    if (char === '*') count++;
  }

  return count;
};
