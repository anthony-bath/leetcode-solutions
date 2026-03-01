/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function (nums) {
  if (nums.length === 1) return 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      return 1;
    }
  }

  return 0;
};
