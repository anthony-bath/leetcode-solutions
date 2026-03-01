const { abs } = Math;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
const findClosest = function (x, y, z) {
  const p1 = abs(z - x);
  const p2 = abs(z - y);

  if (p1 < p2) return 1;
  if (p2 < p1) return 2;

  return 0;
};
