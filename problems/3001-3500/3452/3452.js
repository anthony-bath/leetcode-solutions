/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const sumOfGoodNumbers = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const prev = nums[i - k];
    const next = nums[i + k];

    if ((prev === undefined || curr > prev) && (next === undefined || curr > next)) {
      sum += curr;
    }
  }

  return sum;
};
