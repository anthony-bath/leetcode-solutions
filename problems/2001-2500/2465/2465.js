/**
 * @param {number[]} nums
 * @return {number}
 */
const distinctAverages = function (nums) {
  nums.sort((a, b) => a - b);

  const averages = new Set();

  while (nums.length) {
    averages.add((nums.shift() + nums.pop()) / 2);
  }

  return averages.size;
};
