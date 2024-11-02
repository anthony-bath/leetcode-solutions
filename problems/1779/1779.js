const { abs } = Math;
const manhattan = (x1, y1, x2, y2) => abs(x1 - x2) + abs(y1 - y2);

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoint = function (x, y, points) {
  let [minIndex, minDistance] = [-1, Infinity];

  for (let i = 0; i < points.length; i++) {
    const [px, py] = points[i];

    if (px === x || py === y) {
      const dist = manhattan(x, y, px, py);

      if (dist < minDistance) {
        minDistance = dist;
        minIndex = i;
      }
    }
  }

  return minIndex;
};
