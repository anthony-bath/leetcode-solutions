/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function (nums) {
  const freq = new Map();

  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  let max = 0;

  for (const [num, count] of freq) {
    if (freq.has(num + 1)) {
      const sum = count + freq.get(num + 1);

      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
};
