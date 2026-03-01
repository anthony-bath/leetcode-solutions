/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function (nums) {
  const set = new Set(nums);
  let max = -1;

  for (const num of nums) {
    if (num < 0) continue;
    if (num > max && set.has(-num)) {
      max = num;
    }
  }

  return max;
};
