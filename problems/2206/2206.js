/**
 * @param {number[]} nums
 * @return {boolean}
 */
const divideArray = function (nums) {
  const countByNum = new Map();

  for (const num of nums) {
    countByNum.set(num, (countByNum.get(num) ?? 0) + 1);
  }

  return ![...countByNum.values()].some((count) => count % 2 === 1);
};
