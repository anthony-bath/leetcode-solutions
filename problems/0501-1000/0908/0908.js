/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestRangeI = function (nums, k) {
  let [min, max] = [Infinity, -Infinity];

  for (const num of nums) {
    if (num > max) max = num;
    if (num < min) min = num;
  }

  const diff = max - k - (min + k);

  return diff >= 0 ? diff : 0;
};
