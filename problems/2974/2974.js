/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberGame = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i += 2) {
    const temp = nums[i];
    nums[i] = nums[i - 1];
    nums[i - 1] = temp;
  }

  return nums;
};
