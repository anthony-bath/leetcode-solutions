/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const intersection = function (nums) {
  let common = new Set(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    common = common.intersection(new Set(nums[i]));
  }

  return Array.from(common).sort((a, b) => a - b);
};
