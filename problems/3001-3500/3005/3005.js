/**
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = function (nums) {
  const freq = new Map();
  let max = 0;

  for (const num of nums) {
    const next = (freq.get(num) ?? 0) + 1;
    freq.set(num, next);

    if (next > max) {
      max = next;
    }
  }

  let match = [...freq.values()].filter((v) => v === max).length;

  return match * max;
};
