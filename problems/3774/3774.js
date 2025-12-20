/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const absDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  let [lo, hi] = [0, 0];

  for (let left = 0, right = nums.length - 1; left < k; left++, right--) {
    lo += nums[left];
    hi += nums[right];
  }

  return hi - lo;
};
