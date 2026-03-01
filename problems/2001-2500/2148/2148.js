/**
 * @param {number[]} nums
 * @return {number}
 */
const countElements = function (nums) {
  if (nums.length < 3) return 0;
  nums.sort((a, b) => a - b);

  let count = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[0] && nums[i] < nums[nums.length - 1]) {
      count++;
    }
  }

  return count;
};
