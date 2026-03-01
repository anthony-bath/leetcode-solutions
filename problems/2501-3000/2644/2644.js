/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
const maxDivScore = function (nums, divisors) {
  let [minDivisor, maxScore] = [divisors[0], 0];

  for (const divisor of divisors) {
    let score = 0;

    for (const num of nums) {
      if (num % divisor === 0) {
        score++;
      }
    }

    if (score > maxScore) {
      minDivisor = divisor;
      maxScore = score;
    } else if (score === maxScore) {
      if (divisor < minDivisor) {
        minDivisor = divisor;
      }
    }
  }

  return minDivisor;
};
