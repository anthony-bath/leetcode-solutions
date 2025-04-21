/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = function (nums, k) {
  return nums.reduce((sum, num) => sum + num, 0) % k;
};
