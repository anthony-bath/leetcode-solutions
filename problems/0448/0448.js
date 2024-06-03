/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  const visited = Array(nums.length + 1).fill(0);

  for (const num of nums) {
    visited[num] = 1;
  }

  const output = [];

  for (let i = 1; i < visited.length; i++) {
    if (!visited[i]) {
      output.push(i);
    }
  }

  return output;
};
