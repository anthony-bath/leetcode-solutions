/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const missingMultiple = function (nums, k) {
  const set = new Set(nums);
  let factor = 1;

  while (true) {
    if (!set.has(factor * k)) {
      return factor * k;
    }

    factor++;
  }
};
