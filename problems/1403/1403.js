/**
 * @param {number[]} nums
 * @return {number[]}
 */
const minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  const sum = nums.reduce((sum, num) => sum + num, 0);

  const result = [];
  let resultSum = 0;

  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i]);
    resultSum += nums[i];

    if (resultSum > sum - resultSum) {
      break;
    }
  }

  return result;
};
