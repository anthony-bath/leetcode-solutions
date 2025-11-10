const { abs } = Math;

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDistance = function (nums) {
  const freq = new Map();

  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) ?? []).concat([i]));
  }

  let min = -1;

  for (const [num, indices] of freq) {
    if (indices.length < 3) continue;

    for (let i = 0; i <= indices.length - 3; i++) {
      const diff = 2 * (indices[i + 2] - indices[i]);

      if (diff < min || min === -1) {
        min = diff;
      }
    }
  }

  return min;
};
