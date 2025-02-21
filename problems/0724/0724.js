/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  const sum = nums.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;
  let rightSum = sum - nums[0];

  if (leftSum === rightSum) return 0;

  for (let i = 1; i < nums.length; i++) {
    leftSum += nums[i - 1];
    rightSum -= nums[i];

    if (leftSum === rightSum) return i;
  }

  return -1;
};
