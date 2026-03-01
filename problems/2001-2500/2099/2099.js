/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSubsequence = function (nums, k) {
  const sorted = nums.map((num, i) => [num, i]).sort(([an, ai], [bn, bi]) => bn - an);
  const top = sorted.splice(0, k).sort(([an, ai], [bn, bi]) => ai - bi);

  return top.map(([num]) => num);
};
