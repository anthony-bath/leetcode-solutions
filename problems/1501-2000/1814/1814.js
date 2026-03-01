/**
 * @param {number[]} nums
 * @return {number}
 */
const countNicePairs = function (nums) {
  const MOD = BigInt(10 ** 9 + 7);
  const freq = new Map();
  let result = 0n;

  for (const num of nums) {
    const diff = num - reverse(num);
    const prev = freq.get(diff) ?? 0n;

    result = (result + prev) % MOD;
    freq.set(diff, prev + 1n);
  }

  return Number(result);
};

function reverse(num) {
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = (num - (num % 10)) / 10;
  }

  return rev;
}
