/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  if (nums.every((num) => num === 0)) return [[0, 0, 0]];

  const lookup = {};

  for (let i = 0; i < nums.length; i++) {
    if (!lookup[nums[i]]) {
      lookup[nums[i]] = 0;
    }

    lookup[nums[i]]++;
  }

  const uniques = new Set();
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      const target = -1 * (nums[i] + nums[j]);

      if (!lookup[target]) continue;
      if (nums[i] === target && nums[j] !== target && lookup[target] < 2) continue;
      if (nums[i] !== target && nums[j] === target && lookup[target] < 2) continue;
      if (nums[i] === target && nums[j] === target && lookup[target] < 3) continue;

      const elements = [nums[i], nums[j], target].sort((a, b) => a - b);
      const key = elements.join('|');

      if (!uniques.has(key)) {
        result.push(elements);
        uniques.add(key);
      }
    }
  }

  return result;
};
