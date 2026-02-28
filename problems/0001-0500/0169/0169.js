/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
