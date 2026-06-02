/**
 * @param {number[]} nums
 * @return {number}
 */
const firstUniqueEven = function (nums) {
  const freq = new Map();

  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  for (const num of nums) {
    if (num % 2 === 1) continue;
    if (freq.get(num) !== 1) continue;

    return num;
  }

  return -1;
};
