/**
 * @param {number[]} nums
 * @return {number}
 */
const countPartitions = function (nums) {
  let count = 0;
  let left = 0;
  let right = nums.reduce((sum, num) => sum + num, 0);

  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    right -= nums[i];

    if ((left - right) % 2 === 0) {
      count += 1;
    }
  }

  return count;
};
