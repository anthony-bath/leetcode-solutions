const { abs } = Math;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  if (nums.length === 1) return false;

  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (seen.has(num)) {
      if (abs(seen.get(num) - i) <= k) return true;
    }

    seen.set(num, i);
  }

  return false;
};
