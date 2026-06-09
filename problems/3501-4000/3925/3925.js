/**
 * @param {number[]} nums
 * @return {number[]}
 */
const concatWithReverse = function (nums) {
  const n = nums.length;
  const result = Array(2 * n);

  for (let i = 0, j = 2 * n - 1; i < n; i++, j--) {
    result[i] = nums[i];
    result[j] = nums[i];
  }

  return result;
};
