/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function (nums) {
  const hash = new Map();
  const sorted = [...nums].sort((a, b) => a - b);

  sorted.forEach((num, i) => hash.set(num, hash.get(num) ?? i));

  return nums.map((num) => hash.get(num));
};
