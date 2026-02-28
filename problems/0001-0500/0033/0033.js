/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let [low, high] = [0, nums.length - 1];

  while (low <= high) {
    const mid = (low + high) >> 1;

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[low] <= nums[mid]) {
      // Left half is sorted
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};
