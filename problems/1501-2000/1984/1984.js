/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function (nums, k) {
  if (nums.length === 1) return 0;
  if (nums.length === 2) return Math.abs(nums[0] - nums[1]);

  nums.sort((a, b) => a - b);

  let minDiff = Infinity;

  for (let i = 0; i < nums.length - (k - 1); i += 1) {
    minDiff = Math.min(minDiff, nums[i + k - 1] - nums[i]);
  }

  return minDiff;
};
