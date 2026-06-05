/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const limitOccurrences = function (nums, k) {
  const result = [];
  let count = 0;
  let last = 0;

  for (const num of nums) {
    if (num !== last) {
      count = 0;
      last = num;
    }

    if (count < k) {
      result.push(num);
      count += 1;
    }
  }

  return result;
};
