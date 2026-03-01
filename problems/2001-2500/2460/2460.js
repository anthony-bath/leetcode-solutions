/**
 * @param {number[]} nums
 * @return {number[]}
 */
const applyOperations = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  return nums.sort((a, b) => {
    if (a === 0) {
      return 1;
    }
    if (b === 0) {
      return -1;
    }

    return 0;
  });
};
