/**
 * @param {number[]} nums
 * @return {number}
 */
const findNonMinOrMax = function (nums) {
  if (nums.length <= 2) return -1;

  const sorted = [nums[0], nums[1], nums[2]].sort((a, b) => a - b);

  return sorted[1];
};
