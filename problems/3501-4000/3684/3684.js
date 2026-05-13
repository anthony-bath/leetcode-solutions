/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxKDistinct = function (nums, k) {
  nums.sort((a, b) => b - a);

  const result = [];
  let last = null;

  for (const num of nums) {
    if (num !== last) {
      result.push(num);
      if (result.length === k) break;
      last = num;
    }
  }

  return result;
};
