/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function (nums) {
  const max = Math.max(...nums);

  return nums.reduce((moves, num) => moves + max - num, 0);
};
