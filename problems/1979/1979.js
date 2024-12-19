/**
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = function (nums) {
  nums.sort((a, b) => a - b);

  return gcd(nums[0], nums.at(-1));
};

function gcd(x, y) {
  if (!y) {
    return x;
  }

  return gcd(y, x % y);
}
