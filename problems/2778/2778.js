/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfSquares = function (nums) {
  const n = nums.length;

  return nums.reduce((sum, num, i) => {
    if (n % (i + 1) === 0) {
      sum += num * num;
    }

    return sum;
  }, 0);
};
