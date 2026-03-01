/**
 * @param {number[]} nums
 * @return {number}
 */
const firstUniqueFreq = function (nums) {
  const numFreq = Array(Math.max(...nums) + 1).fill(0);
  const freqFreq = Array(nums.length + 1).fill(0);

  for (const num of nums) {
    freqFreq[numFreq[num]] -= 1;
    numFreq[num] += 1;
    freqFreq[numFreq[num]] += 1;
  }

  for (const num of nums) {
    if (freqFreq[numFreq[num]] === 1) {
      return num;
    }
  }

  return -1;
};
