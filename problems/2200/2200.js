const { min, max } = Math;

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
const findKDistantIndices = function (nums, key, k) {
  const keyIndices = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      keyIndices.push(i);
    }
  }

  const output = [];

  for (let kI = 0; kI < keyIndices.length; kI++) {
    let start = max(0, keyIndices[kI] - k);
    let end = keyIndices[kI + 1]
      ? min(keyIndices[kI] + k, keyIndices[kI + 1] - k - 1)
      : min(keyIndices[kI] + k, nums.length - 1);

    for (let i = start; i <= end; i++) {
      output.push(i);
    }
  }

  return output;
};
