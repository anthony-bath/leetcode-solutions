/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findMissingElements = function (nums) {
  let [min, max] = [Infinity, -Infinity];

  for (const num of nums) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  const set = new Set(nums);
  const result = [];

  for (let num = min; num <= max; num++) {
    if (!set.has(num)) {
      result.push(num);
    }
  }

  return result;
};
