const { max } = Math;

/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = function (s) {
  if (s.length === 1) return -1;

  let maxLength = -1;

  for (let l = 0; l < s.length - 1; l++) {
    for (let r = s.length - 1; r > l; r--) {
      if (s[r] !== s[l]) continue;

      maxLength = max(maxLength, r - l - 1);
    }
  }

  return maxLength;
};
