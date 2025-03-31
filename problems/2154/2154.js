/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = function (nums, original) {
  // Set was slower for this problem (nums.length <= 1000)
  while (nums.includes(original)) {
    original *= 2;
  }

  return original;
};
