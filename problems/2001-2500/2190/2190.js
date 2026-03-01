/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
const mostFrequent = function (nums, key) {
  const dict = new Map();
  let [max, result] = [0, null];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      const num = nums[i + 1];
      const next = (dict.get(num) ?? 0) + 1;

      if (next > max) {
        max = next;
        result = num;
      }

      dict.set(nums[i + 1], next);
    }
  }

  return result;
};
