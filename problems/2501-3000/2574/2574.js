const { abs } = Math;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = function (nums) {
  if (nums.length === 1) return [0];
  if (nums.length === 2) return [nums[1], nums[0]];

  let [left, right] = [0, nums.reduce((sum, num) => sum + num, 0)];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      right -= nums[i];
      result.push(abs(left - right));
    } else {
      left += nums[i - 1];
      right -= nums[i];
      result.push(abs(left - right));
    }
  }

  return result;
};
