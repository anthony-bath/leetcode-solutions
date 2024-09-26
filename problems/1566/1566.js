/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
const containsPattern = function (arr, m, k) {
  for (let j = 0; j < arr.length; j++) {
    let lastPattern = null;
    let count = 0;

    for (let i = j; i <= arr.length - m; i += m) {
      const pattern = arr.slice(i, i + m).join(',');

      if (lastPattern === null || lastPattern !== pattern) {
        lastPattern = pattern;
        count = 1;
      } else if (pattern === lastPattern) {
        count++;
      }

      if (count >= k) return true;
    }
  }

  return false;
};

//TODO: learn sliding window approach
