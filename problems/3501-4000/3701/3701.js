/**
 * @param {number[]} nums
 * @return {number}
 */
const alternatingSum = function (nums) {
  let multiplier = 1;
  let sum = 0;

  for (const num of nums) {
    sum += multiplier * num;
    multiplier *= -1;
  }

  return sum;
};
