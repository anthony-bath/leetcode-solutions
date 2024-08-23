/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function (nums, index) {
  const target = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const ii = index[i];
    target.splice(ii, 0, num);
  }

  return target;
};
