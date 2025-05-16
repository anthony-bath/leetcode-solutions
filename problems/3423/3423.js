const { abs, max } = Math;

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAdjacentDistance = function (nums) {
  let diff = abs(nums.at(-1) - nums[0]);

  for (let i = 1; i < nums.length; i++) {
    diff = max(abs(nums[i] - nums[i - 1]), diff);
  }

  return diff;
};
