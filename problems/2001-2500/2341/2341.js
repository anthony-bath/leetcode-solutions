/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberOfPairs = function (nums) {
  nums.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      pairs++;
      i++;
    }
  }

  return [pairs, nums.length - pairs * 2];
};
