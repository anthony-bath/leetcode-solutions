/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPairs = function (nums, k) {
  if (new Set(nums).size === nums.length) return 0;

  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] !== nums[i]) continue;
      if ((i * j) % k !== 0) continue;

      count++;
    }
  }

  return count;
};
