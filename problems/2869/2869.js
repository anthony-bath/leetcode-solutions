/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = function (nums, k) {
  const elements = new Set();
  let ops = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] <= k) {
      elements.add(nums[i]);
    }

    ops++;

    if (elements.size === k) break;
  }

  return ops;
};
