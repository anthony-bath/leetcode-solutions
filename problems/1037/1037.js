/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = function (points) {
  const unique = new Set(points.map(([x, y]) => `${x},${y}`));
  if (unique.size < 3) return false;

  const [[x1, y1], [x2, y2], [x3, y3]] = points;

  if (x1 === x2 && x1 === x3) return false;
  if (y1 === y2 && y2 === y3) return false;

  const m1 = (y2 - y1) / (x2 - x1);
  const m2 = (y3 - y2) / (x3 - x2);

  return m1 !== m2;
};
