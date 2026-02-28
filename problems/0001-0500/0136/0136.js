/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  return nums.reduce((result, num) => result ^ num, 0);
};
