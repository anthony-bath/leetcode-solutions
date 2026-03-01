/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function (nums) {
  if (nums.length === 1) return 0;

  let ops = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      ops += 1 + nums[i - 1] - nums[i];
      nums[i] = nums[i - 1] + 1;
    }
  }

  return ops;
};
