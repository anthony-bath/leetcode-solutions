/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = function (nums, diff) {
  const set = new Set(nums);
  let count = 0;

  for (const num of nums) {
    if (set.has(num + diff) && set.has(num - diff)) {
      count++;
    }
  }

  return count;
};
