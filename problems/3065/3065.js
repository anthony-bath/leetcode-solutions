/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = function (nums, k) {
  return nums.filter((num) => num < k).length;
};
