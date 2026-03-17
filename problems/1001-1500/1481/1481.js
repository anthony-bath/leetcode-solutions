/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = function (arr, k) {
  const hash = new Map();

  for (const num of arr) {
    hash.set(num, (hash.get(num) ?? 0) + 1);
  }

  const counts = [...hash.values()].sort((a, b) => a - b);

  let sum = 0;
  let i = 0;

  while (true) {
    if (sum + counts[i] <= k) {
      sum += counts[i];
      i++;
    } else {
      break;
    }
  }

  return hash.size - i;
};
