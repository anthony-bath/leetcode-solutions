/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const expected = (nums.length * (1 + nums.length)) / 2;
  const actual = nums.reduce((total, num) => total + num, 0);

  return expected - actual;
};
