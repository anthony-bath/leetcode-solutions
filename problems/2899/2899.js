/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function (nums) {
  const seen = [];
  const ans = [];
  let k = 0;

  for (const num of nums) {
    if (num === -1) {
      k += 1;

      if (k <= seen.length) {
        ans.push(seen[k - 1]);
      } else {
        ans.push(-1);
      }
    } else {
      k = 0;
      seen.unshift(num);
    }
  }

  return ans;
};
