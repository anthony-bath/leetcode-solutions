/**
 * @param {number} n
 * @return {boolean}
 */
const consecutiveSetBits = function (n) {
  if (n < 3) return false;
  let count = 0,
    found = false;

  while (n > 0) {
    if ((n & 1) === 1) {
      count += 1;

      if (count >= 2) {
        if (found) return false;
        found = true;
      }
    } else {
      count = 0;
    }

    n >>= 1;
  }

  return found;
};
