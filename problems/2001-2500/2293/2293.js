const { min, max } = Math;

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMaxGame = function (nums) {
  if (nums.length === 1) return nums[0];

  const next = [];
  const n = nums.length;

  for (let i = 0; i < n / 2; i++) {
    if (i % 2 === 0) {
      next[i] = min(nums[2 * i], nums[2 * i + 1]);
    } else {
      next[i] = max(nums[2 * i], nums[2 * i + 1]);
    }
  }

  return minMaxGame(next);
};
