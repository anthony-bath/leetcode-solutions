/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = function (nums) {
  const freq = new Map();

  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  return nums.sort((a, b) => freq.get(a) - freq.get(b) || b - a);
};
