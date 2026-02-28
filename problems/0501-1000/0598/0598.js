/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = function (m, n, ops) {
  let minX = m;
  let minY = n;

  for (const [x, y] of ops) {
    if (x < minX) minX = x;
    if (y < minY) minY = y;
  }

  return minX * minY;
};
