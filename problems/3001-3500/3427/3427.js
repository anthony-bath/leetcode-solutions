/**
 * @param {number[]} nums
 * @return {number}
 */
const subarraySum = function (nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    let start = Math.max(0, i - nums[i]);

    for (let j = start; j <= i; j++) {
      total += nums[j];
    }
  }

  return total;
};
