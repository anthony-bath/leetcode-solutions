/**
 * @param {string} s
 * @return {number}
 */
const residuePrefixes = function (s) {
  let count = 0;
  let seen = new Set();

  for (let i = 0; i < s.length; i++) {
    seen.add(s[i]);

    if (seen.size === (i + 1) % 3) {
      count += 1;
    }
  }

  return count;
};
