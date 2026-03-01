/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);

  let [left, right] = [0, nums.length - 1];
  let min = Infinity;

  while (left < right) {
    const avg = (nums[left++] + nums[right--]) / 2;

    if (avg < min) {
      min = avg;
    }
  }

  return min;
};
