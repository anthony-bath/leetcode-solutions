/**
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = function (nums) {
  const freq = new Map();

  for (const num of nums) {
    if (num % 2) continue;

    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  let [best, bestCount] = [-1, 0];

  for (const [num, count] of freq.entries()) {
    if (count > bestCount) {
      [best, bestCount] = [num, count];
    } else if (count === bestCount) {
      best = Math.min(best, num);
    }
  }

  return best;
};
