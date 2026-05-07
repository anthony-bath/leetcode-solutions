/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSum = function (nums) {
  nums.sort((a, b) => a - b);

  if (nums[nums.length - 1] < 0) {
    return nums[nums.length - 1];
  }

  return [...new Set(nums)].filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
};
