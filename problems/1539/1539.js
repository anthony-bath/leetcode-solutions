/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
  let count = 0;

  for (const element of arr) {
    if (element <= k + count) {
      count++;
    }
  }

  return k + count;
};
