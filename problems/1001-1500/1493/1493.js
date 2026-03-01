/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
  if (nums.length === 1) return 0;

  const zeroes = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroes.push(i);
    }
  }

  if (zeroes.length <= 1) return nums.length - 1;
  if (zeroes.length === nums.length) return 0;

  let max = -Infinity;

  for (let i = 0; i < zeroes.length; i++) {
    const startIndex = i > 0 ? zeroes[i - 1] + 1 : 0;
    const endIndex = i < zeroes.length - 1 ? zeroes[i + 1] - 1 : nums.length - 1;

    max = Math.max(max, endIndex - startIndex);
  }

  return max;
};
