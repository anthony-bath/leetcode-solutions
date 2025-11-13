/**
 * @param {string} s
 * @return {number}
 */
const minimumChairs = function (s) {
  let [current, max] = [0, 0];

  for (const char of s) {
    if (char === 'E') {
      current++;

      if (current > max) {
        max = current;
      }
    } else {
      current--;
    }
  }

  return max;
};
