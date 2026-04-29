/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const firstStableIndex = function (nums, k) {
  let mins = Array(nums.length);
  let min = Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < min) {
      min = nums[i];
    }

    mins[i] = min;
  }

  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }

    const score = max - mins[i];

    if (score <= k) {
      return i;
    }
  }

  return -1;
};
