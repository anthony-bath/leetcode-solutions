/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let [sIndex, tIndex] = [0, 0];

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }

    tIndex++;
  }

  return sIndex === s.length;
};
