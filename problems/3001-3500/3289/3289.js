/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSneakyNumbers = function (nums) {
  const data = Array(nums.length - 1).fill(0);
  const result = [];

  for (const num of nums) {
    data[num]++;

    if (data[num] === 2) {
      result.push(num);
    }
  }

  return result;
};
