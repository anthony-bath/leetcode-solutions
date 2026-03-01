const { abs, max } = Math;

/**
 * @param {number[]} nums
 * @return {number}
 */
const findClosestNumber = function (nums) {
  let [leastDistance, result] = [Infinity, null];

  for (const num of nums) {
    if (num === 0) return 0;
    const distance = abs(num);

    if (distance < leastDistance) {
      leastDistance = distance;
      result = num;
    } else if (distance === leastDistance) {
      result = max(num, result);
    }
  }

  return result;
};
