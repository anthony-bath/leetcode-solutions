/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function (nums) {
  const freq = new Map();

  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  let total = 0;

  for (const [num, count] of freq) {
    if (count > 1) {
      let n = count - 1;
      total += (n * (n + 1)) / 2;
    }
  }

  return total;
};
