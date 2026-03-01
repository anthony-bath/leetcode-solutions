/**
 * @param {string} s
 * @return {boolean}
 */
const areNumbersAscending = function (s) {
  const nums = s.match(/\d+/g).map(Number);

  if (nums.length <= 1) return true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) return false;
  }

  return true;
};
