/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function (nums) {
  let negativeCount = 0;

  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) negativeCount++;
  }

  return negativeCount % 2 ? -1 : 1;
};
