/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  nums.sort((a, b) => a - b);

  return (nums.pop() - 1) * (nums.pop() - 1);
};
