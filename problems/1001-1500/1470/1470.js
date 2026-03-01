/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
  const output = [];

  let [x, y] = [0, n];

  while (x < n) {
    output.push(nums[x++]);
    output.push(nums[y++]);
  }

  return output;
};
