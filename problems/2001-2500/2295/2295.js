/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
const arrayChange = function (nums, operations) {
  const lookup = new Map();

  for (let i = 0; i < nums.length; i++) {
    lookup.set(nums[i], i);
  }

  for (const [num, replace] of operations) {
    const i = lookup.get(num);
    nums[i] = replace;
    lookup.set(replace, i);
  }

  return nums;
};
