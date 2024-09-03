/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = function (nums, k) {
  let last = null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      const distance = last !== null ? i - last - 1 : null;
      if (distance !== null && distance < k) return false;
      last = i;
    }
  }

  return true;
};
