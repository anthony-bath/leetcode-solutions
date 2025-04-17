/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = function (nums) {
  let removed = false;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      if (removed) return false;

      removed = true;

      if (i > 1 && nums[i] <= nums[i - 2]) {
        nums[i] = nums[i - 1];
      }
    }
  }

  return true;
};
