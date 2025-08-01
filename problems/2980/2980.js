/**
 * @param {number[]} nums
 * @return {boolean}
 */
const hasTrailingZeros = function (nums) {
  return nums.filter((num) => num % 2 === 0).length >= 2;
};
