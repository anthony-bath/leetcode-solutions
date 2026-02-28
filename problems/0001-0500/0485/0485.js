const { max } = Math;

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let best = -Infinity;
  let current = 0;

  for (const num of nums) {
    if (num) {
      current++;
    } else {
      best = max(current, best);
      current = 0;
    }
  }

  return max(current, best);
};
