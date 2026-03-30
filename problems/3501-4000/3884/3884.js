/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function (s) {
  let [left, right] = [0, s.length - 1];

  while (left <= right) {
    if (s[left] === s[right]) return left;

    left += 1;
    right -= 1;
  }

  return -1;
};
