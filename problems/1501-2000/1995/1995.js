/**
 * @param {number[]} nums
 * @return {number}
 */
const countQuadruplets = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        for (let l = k + 1; l < nums.length; l++) {
          if (nums[l] === sum) {
            count++;
          }
        }
      }
    }
  }

  return count;
};
