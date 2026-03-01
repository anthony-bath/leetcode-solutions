/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums.filter((num) => `${num}`.length % 2 === 0).length;
};
