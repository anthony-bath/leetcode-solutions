/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) return result;
    if (nums[i] === target) {
      result.push(i);
    }
  }

  return result;
};
