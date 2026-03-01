/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const sumDivisibleByK = function (nums, k) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  let sum = 0;

  for (const [num, freq] of map) {
    if (freq % k === 0) {
      sum += freq * num;
    }
  }

  return sum;
};
