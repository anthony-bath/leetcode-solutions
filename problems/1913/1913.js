/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);

  return nums.at(-1) * nums.at(-2) - nums[0] * nums[1];
};
