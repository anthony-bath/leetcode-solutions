/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = function (nums) {
  return new Set(nums.filter((num) => num)).size;
};
