/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      result.push(index + 1);
    } else {
      nums[index] = -nums[index];
    }
  }

  return result;
};
