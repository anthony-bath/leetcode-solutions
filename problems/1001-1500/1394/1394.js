/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function (arr) {
  const frequencies = {};

  for (const num of arr) {
    frequencies[num] = (frequencies[num] ?? 0) + 1;
  }

  let maxLuckyNumber = -1;

  for (const [num, freq] of Object.entries(frequencies)) {
    if (freq == num) {
      maxLuckyNumber = Math.max(maxLuckyNumber, num);
    }
  }

  return maxLuckyNumber;
};
