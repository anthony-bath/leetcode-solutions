/**
 * @param {string} s
 * @return {number}
 */
const countKeyChanges = function (s) {
  s = s.toLowerCase();
  let changes = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) changes++;
  }

  return changes;
};
