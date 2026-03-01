/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = function (nums) {
  if (nums.length === 1) return nums[0];

  let [left, right, maxSum] = [0, 1, -Infinity];

  while (right < nums.length) {
    let sum = nums[left];

    while (nums[right] > nums[right - 1]) {
      sum += nums[right++];
    }

    if (sum > maxSum) {
      maxSum = sum;
    }

    left++;
    right = left + 1;
  }

  return maxSum;
};
