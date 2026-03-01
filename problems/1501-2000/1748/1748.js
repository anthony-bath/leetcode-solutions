/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function (nums) {
  const seen = new Set();
  const excluded = new Set();
  let sum = 0;

  for (const num of nums) {
    if (excluded.has(num)) continue;

    if (!seen.has(num)) {
      seen.add(num);
      sum += num;
    } else {
      excluded.add(num);
      sum -= num;
    }
  }

  return sum;
};
