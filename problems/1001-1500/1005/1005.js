/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestSumAfterKNegations = function (nums, k) {
  nums = nums.sort((a, b) => a - b);

  let negativeCount = 0;
  let i = 0;
  let min = 0;

  while (nums[i++] < 0) {
    negativeCount++;
  }

  if (negativeCount >= k) {
    for (let i = 0; i < k; i++) {
      nums[i] = -nums[i];
    }
  } else {
    for (let i = 0; i < negativeCount; i++) {
      nums[i] = -nums[i];
    }

    k -= negativeCount;

    if (k % 2 === 1) {
      min = Math.min(...nums);
    }
  }

  return nums.reduce((sum, num) => sum + num, 0) - 2 * min;
};
