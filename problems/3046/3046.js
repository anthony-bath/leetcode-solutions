/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isPossibleToSplit = function (nums) {
  const data = Array(101).fill(0);

  for (const num of nums) {
    data[num]++;

    if (data[num] > 2) {
      return false;
    }
  }

  return true;
};
