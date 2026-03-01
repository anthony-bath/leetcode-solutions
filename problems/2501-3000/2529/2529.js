/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  if (nums[0] > 0 || nums.at(-1) < 0) return nums.length;

  let [low, high] = [0, nums.length - 1];
  let index = 0;

  while (low <= high) {
    const mid = (low + high) >> 1;

    if (nums[mid] < 0) {
      low = mid + 1;
    } else {
      index = mid;
      high = mid - 1;
    }
  }

  let result = index;
  [low, high] = [index, nums.length - 1];
  index = nums.length;

  while (low <= high) {
    const mid = (low + high) >> 1;

    if (nums[mid] <= 0) {
      low = mid + 1;
    } else {
      index = mid;
      high = mid - 1;
    }
  }

  return Math.max(result, nums.length - index);
};
