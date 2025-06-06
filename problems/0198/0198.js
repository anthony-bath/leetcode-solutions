/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const dp = Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  let max = Math.max(dp[0], dp[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);

    if (dp[i] > max) {
      max = dp[i];
    }
  }

  return max;
};
