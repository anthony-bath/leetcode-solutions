/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function (nums) {
  let sum = 0;
  let min = Infinity;

  for (const num of nums) {
    sum += num;

    if (sum < min) {
      min = sum;
    }
  }

  return min < 0 ? 1 + -1 * min : 1;
};
