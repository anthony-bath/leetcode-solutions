const { floor } = Math;

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = floor((low + high) / 2);
    const required = sumN(mid);

    if (required > n) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return high;
};

function sumN(n) {
  return (n * (n + 1)) / 2;
}
