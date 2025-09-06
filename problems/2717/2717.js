/**
 * @param {number[]} nums
 * @return {number}
 */
const semiOrderedPermutation = function (nums) {
  const n = nums.length;
  const start1 = nums.indexOf(1);
  const startn = nums.indexOf(n);
  const total = start1 + (n - 1 - startn);

  return startn < start1 ? total - 1 : total;
};
