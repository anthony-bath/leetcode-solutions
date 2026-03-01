/**
 * @param {number[]} nums
 * @return {number}
 */
const returnToBoundaryCount = function (nums) {
  let count = 0;
  let sum = 0;

  for (const num of nums) {
    sum += num;

    if (sum === 0) count++;
  }

  return count;
};
