/**
 * @param {number[][]} nums
 * @return {number}
 */
const numberOfPoints = function (nums) {
  const points = new Set();

  for (const [start, end] of nums) {
    for (let point = start; point <= end; point++) {
      points.add(point);
    }
  }

  return points.size;
};
