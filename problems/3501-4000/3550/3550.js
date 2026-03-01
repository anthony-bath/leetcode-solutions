/**
 * @param {number[]} nums
 * @return {number}
 */
const smallestIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (sumDigits(nums[i]) === i) {
      return i;
    }
  }

  return -1;
};

function sumDigits(n) {
  let sum = 0;

  while (n > 0) {
    const rem = n % 10;
    sum += rem;
    n = (n - rem) / 10;
  }

  return sum;
}
