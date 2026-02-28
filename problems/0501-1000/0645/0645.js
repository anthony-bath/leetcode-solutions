/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const map = Array(nums.length + 1).fill(0);
  let dup = null;

  for (const num of nums) {
    map[num]++;

    if (map[num] === 2) dup = num;
  }

  let missing = null;

  for (let i = 1; i < map.length; i++) {
    if (map[i] === 0) {
      missing = i;
      break;
    }
  }

  return [dup, missing];
};
