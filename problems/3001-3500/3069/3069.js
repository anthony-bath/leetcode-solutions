/**
 * @param {number[]} nums
 * @return {number[]}
 */
const resultArray = function (nums) {
  const left = [nums[0]];
  const right = [nums[1]];

  for (let i = 2; i < nums.length; i++) {
    if (left.at(-1) > right.at(-1)) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return left.concat(right);
};
