const { abs } = Math;

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const getMinDistance = function (nums, target, start) {
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) continue;

    const val = abs(i - start);
    if (val < min) {
      min = val;
    }
  }

  return min;
};
