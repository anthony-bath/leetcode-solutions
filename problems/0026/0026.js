/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length;

  let current = 0;

  while (current < nums.length - 1) {
    while (current + 1 < nums.length && nums[current + 1] === nums[current]) {
      nums.splice(current + 1, 1);
    }

    current++;
  }

  return nums.length;
};
