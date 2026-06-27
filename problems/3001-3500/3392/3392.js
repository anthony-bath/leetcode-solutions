/**
 * @param {number[]} nums
 * @return {number}
 */
const countSubarrays = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    const j = i + 1;
    const k = i + 2;

    if (nums[i] + nums[k] === nums[j] / 2) {
      count += 1;
    }
  }

  return count;
};
