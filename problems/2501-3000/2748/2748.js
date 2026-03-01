/**
 * @param {number[]} nums
 * @return {number}
 */
const countBeautifulPairs = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const iDigit = firstDigit(nums[i]);

    for (let j = i + 1; j < nums.length; j++) {
      const jDigit = nums[j] % 10;

      if (gcd(iDigit, jDigit) === 1) count++;
    }
  }

  return count;
};

function firstDigit(num) {
  return ~~(num / 10 ** ~~Math.log10(num));
}

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
}
