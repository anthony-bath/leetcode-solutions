/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const minCuttingCost = function (n, m, k) {
  if (n <= k && m <= k) return 0;

  if (n <= k) {
    return (m - k) * k;
  }

  if (m <= k) {
    return (n - k) * k;
  }
};
