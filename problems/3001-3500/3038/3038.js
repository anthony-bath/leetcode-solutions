/**
 * @param {number[]} nums
 * @return {number}
 */
const maxOperations = function (nums) {
  let target = nums[0] + nums[1];
  let count = 1;

  for (let i = 2; i <= nums.length - 2; i += 2) {
    if (nums[i] + nums[i + 1] === target) {
      count++;
    } else {
      break;
    }
  }

  return count;
};
