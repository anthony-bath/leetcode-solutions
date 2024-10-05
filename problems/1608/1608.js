/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function (nums) {
  nums.sort((a, b) => a - b);

  for (let x = nums.length; x > 0; x--) {
    let targetIndex = nums.length - x;

    if (nums[targetIndex - 1] >= x) continue;

    if (nums[targetIndex] >= x) {
      return x;
    }
  }

  return -1;
};
