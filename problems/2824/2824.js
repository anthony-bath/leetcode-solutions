/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const countPairs = function (nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (num1 + nums[j] < target) {
        count++;
      }
    }
  }

  return count;
};
