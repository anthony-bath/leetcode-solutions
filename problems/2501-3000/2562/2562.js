/**
 * @param {number[]} nums
 * @return {number}
 */
const findTheArrayConcVal = function (nums) {
  let concatenation = 0;
  let [l, r] = [0, nums.length - 1];

  while (l < r) {
    concatenation += Number(`${nums[l++]}${nums[r--]}`);
  }

  return concatenation + (l == r ? nums[l] : 0);
};
