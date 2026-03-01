const { floor, max } = Math;

/**
 * @param {number[]} nums
 * @return {number}
 */
const smallestAbsent = function (nums) {
  const seen = new Set(nums);
  const sum = nums.reduce((sum, num) => sum + num, 0);
  const avg = max(0, floor(sum / nums.length));
  let result = avg + 1;

  while (seen.has(result)) {
    result += 1;
  }

  return result;
};
