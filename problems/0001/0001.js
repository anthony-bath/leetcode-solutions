/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const result = [];
  const lookup = {};

  for (let i = 0; i < nums.length; i++) {
    if (!lookup[nums[i]]) {
      lookup[nums[i]] = [];
    }

    lookup[nums[i]].push(i);
  }

  for (const [i, num] of nums.entries()) {
    const diff = target - num;

    if (diff === num) {
      if (lookup[diff].length < 2) {
        continue;
      }

      return [i, lookup[diff][1]];
    } else {
      if (lookup[diff]) {
        return [i, lookup[diff][0]];
      }
    }
  }
};
