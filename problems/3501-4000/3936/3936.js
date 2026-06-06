/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumSwaps = function (nums) {
  let zeroes = nums.filter((n) => n === 0).length;
  let swaps = 0;
  let n = nums.length;

  for (let i = n - 1; i >= n - zeroes; i--) {
    if (nums[i] !== 0) {
      swaps += 1;
    }
  }

  return swaps;
};
