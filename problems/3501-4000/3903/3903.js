/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const firstStableIndex = function (nums, k) {
  let min = Infinity;
  const mins = Array(nums.length).fill(Infinity);

  for (j = nums.length - 1; j >= 0; j--) {
    if (nums[j] < min) {
      min = nums[j];
    }

    mins[j] = min;
  }

  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }

    const score = max - mins[i];

    if (score <= k) return i;
  }

  return -1;
};
