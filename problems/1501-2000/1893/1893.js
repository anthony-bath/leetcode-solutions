/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isCovered = function (ranges, left, right) {
  for (let curr = left; curr <= right; curr++) {
    if (ranges.some(([rs, re]) => curr >= rs && curr <= re)) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};
