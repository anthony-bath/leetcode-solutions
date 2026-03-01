/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
  let max = 0;
  let current = 0;

  for (const point of gain) {
    current += point;

    if (current > max) {
      max = current;
    }
  }

  return max;
};
