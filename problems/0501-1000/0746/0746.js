const { min } = Math;

/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = [...cost];

  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + min(dp[i - 1], dp[i - 2]);
  }

  return min(dp[n - 1], dp[n - 2]);
};
