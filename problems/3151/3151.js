/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isArraySpecial = function (nums) {
  if (nums.length < 2) return true;

  for (let i = 1; i < nums.length; i++) {
    let paritySum = (nums[i] % 2) + (nums[i - 1] % 2);

    if (paritySum !== 1) {
      return false;
    }
  }

  return true;
};
