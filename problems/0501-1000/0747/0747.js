/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function (nums) {
  let [max, index] = [0, -1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      index = i;
      max = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === index) continue;
    if (nums[i] * 2 > max) return -1;
  }

  return index;
};
