/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function (nums) {
  let max = nums[0];
  const prefixGcd = new Uint32Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }

    prefixGcd[i] = gcd(max, nums[i]);
  }

  prefixGcd.sort();
  let gcdSum = 0;
  let [left, right] = [0, prefixGcd.length - 1];

  while (left < right) {
    gcdSum += gcd(prefixGcd[left], prefixGcd[right]);
    left += 1;
    right -= 1;
  }

  return gcdSum;
};

function gcd(x, y) {
  while (y !== 0) {
    const temp = x % y;
    x = y;
    y = temp;
  }

  return x;
}
