const { floor, abs } = Math;

/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  const buckets = new Map();
  const range = valueDiff + 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const index = floor(num / range);

    if (buckets.has(index)) {
      return true;
    } else if (buckets.has(index + 1) && abs(num - buckets.get(index + 1)) < range) {
      return true;
    } else if (buckets.has(index - 1) && abs(num - buckets.get(index - 1)) < range) {
      return true;
    }

    buckets.set(index, num);

    if (i >= indexDiff) {
      buckets.delete(floor(nums[i - indexDiff] / range));
    }
  }

  return false;
};
