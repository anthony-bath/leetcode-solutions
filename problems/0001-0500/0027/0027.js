/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let insertIndex = 0;

  for (const num of nums) {
    if (num !== val) {
      nums[insertIndex++] = num;
    }
  }

  return insertIndex;
};
