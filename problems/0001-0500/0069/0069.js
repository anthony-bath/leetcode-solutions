/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let low = 1;
  let high = Math.floor(x / 2) + 1;

  while (low <= high) {
    const mid = (low + high) >> 1;
    const product = mid * mid;

    if (product === x) return mid;
    else if (product < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
};
